using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using FinServBussinessEntities;
using System.Web;


namespace FinServUnitOfWork.Repository
{

    public class UOWGoogleDrive : IGoogleDrive
    {
        public static string[] Scopes = { DriveService.Scope.Drive };

        //create Drive API service.
        public DriveService GetService()
        {
            //get Credentials from client_secret.json file 
            UserCredential credential;
            using (var stream = new FileStream(@"D:\Nick_Alcock\FinServUnitOfWork\client_secret.json", FileMode.Open, FileAccess.Read))
            {
                String FolderPath = @"D:\";
                String FilePath = Path.Combine(FolderPath, "DriveServiceCredentials.json");

                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(FilePath, true)).Result;
            }

            //create Drive API service.
            DriveService service = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "GoogleDriveRestAPI-v3",
            });
            return service;
        }

        //get all files from Google Drive.
        public List<GoogleDrive> GetDriveFiles(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantDetails = db.tblApplicants.Where(p => p.IsActive == true && p.ApplicantID == ApplicantID).FirstOrDefault();
                    List<GoogleDrive> FileList = new List<GoogleDrive>();
                    if (GetApplicantDetails != null)
                    {
                        DriveService service = GetService();

                        // define parameters of request.
                        FilesResource.ListRequest FileListRequest = service.Files.List();

                        FileListRequest.Fields = "nextPageToken, files(id, name, size, version, createdTime)";

                        //get file list.
                        IList<Google.Apis.Drive.v3.Data.File> files = FileListRequest.Execute().Files;


                        if (files != null && files.Count > 0)
                        {
                            foreach (var file in files)
                            {
                                if (file.Size != null)
                                {
                                    GoogleDrive File = new GoogleDrive
                                    {
                                        Id = file.Id,
                                        Name = file.Name,
                                        Size = file.Size,
                                        Version = file.Version,
                                        CreateTime = file.CreatedTime

                                    };
                                    FileList.Add(File);
                                }
                            }
                        }
                    }
                    return FileList;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        //file Upload to the Google Drive.
        public bool FileUpload(HttpPostedFile file)
        {
            if (file != null && file.ContentLength > 0)
            {
                DriveService service = GetService();

                string path = Path.Combine(HttpContext.Current.Server.MapPath("~/GoogleDriveFiles"),
                Path.GetFileName(file.FileName));
                file.SaveAs(path);

                var FileMetaData = new Google.Apis.Drive.v3.Data.File();
                FileMetaData.Name = Path.GetFileName(file.FileName);
                FileMetaData.MimeType = MimeMapping.GetMimeMapping(path);

                FilesResource.CreateMediaUpload request;

                using (var stream = new System.IO.FileStream(path, System.IO.FileMode.Open))
                {
                    request = service.Files.Create(FileMetaData, stream, FileMetaData.MimeType);
                    request.Fields = "id";
                    request.Upload();
                }
            }
            return true;
        }

        //Download file from Google Drive by fileId.
        public string DownloadGoogleFile(string fileId)
        {
            DriveService service = GetService();
            string ItemName = "";
            // define parameters of request.
            FilesResource.ListRequest FileListRequest = service.Files.List();

            FileListRequest.Fields = "nextPageToken, files(id, name, size, version, createdTime)";

            //get file list.
            IList<Google.Apis.Drive.v3.Data.File> files = FileListRequest.Execute().Files;

             foreach (var item in files)
             {
                // download each file
                if (item.Id.Trim().ToLower() == fileId.Trim().ToLower())
                {
                    DownloadFile(service, item, string.Format(@"D:\{0}", item.Name));
                    ItemName = item.Name;
                }
                              
             }
             return  ItemName;
        }

        private static void DownloadFile(Google.Apis.Drive.v3.DriveService service, Google.Apis.Drive.v3.Data.File file, string saveTo)
        {
            var request = service.Files.Get(file.Id);
            var stream = new System.IO.MemoryStream();

            request.MediaDownloader.ProgressChanged += (Google.Apis.Download.IDownloadProgress progress) =>
            {
                switch (progress.Status)
                {
                    case Google.Apis.Download.DownloadStatus.Downloading:
                        {
                            Console.WriteLine(progress.BytesDownloaded);
                            break;
                        }
                    case Google.Apis.Download.DownloadStatus.Completed:
                        {
                            Console.WriteLine("Download complete.");
                            SaveStreamto(stream, saveTo);
                            break;
                        }
                    case Google.Apis.Download.DownloadStatus.Failed:
                        {
                            Console.WriteLine("Download failed.");
                            break;
                        }
                }
            };
            request.Download(stream);

        }

        private static void SaveStreamto(System.IO.MemoryStream stream, string saveTo)
        {
            using (System.IO.FileStream file = new System.IO.FileStream(saveTo, System.IO.FileMode.Create, System.IO.FileAccess.Write))
            {
                stream.WriteTo(file);
            }
        }

        //Delete file from the Google drive
        public bool DeleteFile(GoogleDrive files)
        {
            DriveService service = GetService();
            try
            {
                // Initial validation.
                if (service == null)
                    throw new ArgumentNullException("service");

                if (files == null)
                    throw new ArgumentNullException(files.Id);

                // Make the request.
                service.Files.Delete(files.Id).Execute();
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception("Request Files.Delete failed.", ex);
            }

        }
    }
}