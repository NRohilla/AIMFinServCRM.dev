using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/GoogleServices")]
    public class GoogleServicesController : ApiController
    {

        IGoogleServices Repository = new UOWGoogleServices();

        [HttpPost]
        [Route("SendEmail")]
        public string SendEmail()
        {
            return Repository.SendEmail();
        }
    }
}