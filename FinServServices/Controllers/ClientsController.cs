using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/Clients")]
    public class ClientsController : ApiController
    {
        IClients Repository = new UOWClients();

        [HttpGet]
        [Route("GetAllClients")]
        public IEnumerable<Applicants> GetAllClients()
        {
            return Repository.GetAllClients();
        }

        [HttpGet]
        [Route("GetClientDetails")]
        public Applicants GetClientDetails(string ClientID)
        {
            return Repository.GetClientDetails(ClientID);
        }
    }
}
