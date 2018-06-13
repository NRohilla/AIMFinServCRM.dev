using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using FinServBussinessEntities;
using System.IO;
using System.Web.Http.Cors;
//using Google.Apis.Sheets.v4.Data;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/GoogleDrive")]
    public class GoogleDriveController : ApiController
    {
        IGoogleDrive Repository = new UOWGoogleDrive();
        [HttpGet]
        [Route("GetDriveFiles")]
        public List<GoogleDrive> GetDriveFiles(Guid ApplicantID)
        {
            return Repository.GetDriveFiles(ApplicantID);
        }

        [HttpPost]
        [Route("DeleteFile")]
        public bool DeleteFile(GoogleDrive file)
        {
            return Repository.DeleteFile(file);
        }

        [HttpPost]
        [Route("FileUpload")]
        public bool FileUpload()
        {
            var uploadedfile = HttpContext.Current.Request.Files["file"];
            return Repository.FileUpload(uploadedfile);
        }

        private IHttpActionResult RedirectToAction(string v)
        {
            return null;
        }

        [HttpGet]
        [Route("DownloadFile")]
        public string DownloadFile(string Id)
        {
            FinServUnitOfWork.utility objutility = new FinServUnitOfWork.utility();
            string FilePath = string.Empty;

            foreach (string item in objutility.letters)
            {
                string path = item.ToString() + @":\";
                if (Directory.Exists(path))
                {
                    FilePath = Repository.DownloadGoogleFile(Id, path);
                    break;
                }
            }

            if (FilePath.Trim().Length > 0)
                return "File is downloaded at : " + FilePath.Trim().ToString();
            else
                return "issue with download";
        }
    }
}