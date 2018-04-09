using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using System;

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
        
        [HttpGet]
        [Route("GetLoanMasterGrid")]
        public IEnumerable<LoanMasterDetails> GetLoanMasterGrid()
        {
            return Repository.GetLoanMasterGrid();
        }

        [HttpPost]
        [Route("UpdateLoanMasterDetails")]
        public bool UpdateLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails)
        {
            return Repository.UpdateLoanMasterDetails(_objLoanMasterDetails);
        }
        [HttpPost]
        [Route("AddLoanMasterDetails")]
        public bool AddLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails)
        {
            return Repository.AddLoanMasterDetails(_objLoanMasterDetails);
        }
        [HttpGet]
        [Route("GetDataFromLoanApp")]
        public List<LoanMasterDetails> GetDataFromLoanApp(int AutoId)
        {
            return Repository.GetDataFromLoanApp(AutoId);
        }

    }
}