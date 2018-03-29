using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using FinServDataModel;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/LoanMaster")]
    public class LoanMasterController : ApiController
    {
        ILoanMaster Repository = new UOWLoanMaster();

        [HttpGet]
        [Route("GetAllLoanMasterDetails")]
        public List<LoanMasterDetails> GetAllLoanMasterDetails()
        {
            return Repository.GetAllLoanMasterDetails();
        }

        [HttpGet]
        [Route("GetLoanMasterDetails")]
        public LoanMasterDetails GetLoanMasterDetails(string ClientID)
        {
            return Repository.GetLoanMasterDetails(ClientID);
        }
    }
}