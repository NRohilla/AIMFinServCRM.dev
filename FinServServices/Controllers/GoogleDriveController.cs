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
            string FilePath = Repository.DownloadGoogleFile(Id);
            System.Web.HttpContext.Current.Response.ContentType = "application/zip";
            System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment; filename=" + Path.GetFileName(FilePath));
            System.Web.HttpContext.Current.Response.WriteFile(Path.Combine((@"D:\\" + Path.GetFileName(FilePath))));
            System.Web.HttpContext.Current.Response.End();
            System.Web.HttpContext.Current.Response.Flush();

            return Repository.DownloadGoogleFile(Id);

            
        }
    }
}