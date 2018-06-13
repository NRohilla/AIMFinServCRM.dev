using System;
using System.Collections.Generic;
using FinServBussinessEntities;
using System.Web;

namespace FinServUnitOfWork.Interface
{
    public interface IGoogleDrive
    {
        List<GoogleDrive> GetDriveFiles(Guid ApplicantID);
        string DownloadGoogleFile(string fileId, string drive);
        bool FileUpload(HttpPostedFile file);
        bool DeleteFile(GoogleDrive files);
    }
}
