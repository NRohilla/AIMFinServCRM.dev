using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using FinServDataModel;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/Clients")]
    public class ClientsController : ApiController
    {
        IClients Repository = new UOWClients();

        [HttpGet]
        [Route("GetAllClients")]
        public List<Applicants> GetAllClients()
        {
            return Repository.GetAllClients();
        }

        [HttpGet]
        [Route("GetAllLoanApplications")]
        public List<LoanApplicationForms> GetAllLoanApplications()
        {
            return Repository.GetAllLoanApplications();
        }

        [HttpGet]
        [Route("GetClientDetails")]
        public Applicants GetClientDetails(string ClientID)
        {
            return Repository.GetClientDetails(ClientID);
        }

        [HttpGet]
        [Route("GetLoanApplicationDetails")]
        public LoanApplicationForms GetLoanApplicationDetails(string LoanAppNo)
        {
            return Repository.GetLoanApplicationDetails(LoanAppNo);
        }

        [HttpGet]
        [Route("GetClientCommunicationDetails")]
        public List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID)
        {
            return Repository.GetClientCommunicationDetails(ClientID);
        }

        [HttpGet]
        [Route("GetClientEmployementDetails")]
        public List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID)
        {
            return Repository.GetClientEmployementDetails(ClientID);
        }

        [HttpGet]
        [Route("GetClientQualificationDetails")]
        public List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID)
        {
            return Repository.GetClientQualificationDetails(ClientID);
        }

        [HttpPost]
        [Route("UpdateClientEmploymentDetails")]
        public bool UpdateClientEmploymentDetails(List<ApplicantEmployementDetails> ApplicantEmployementDetails)
        {
            return Repository.UpdateClientEmploymentDetails(ApplicantEmployementDetails);
        }

        [HttpPost]
        [Route("UpdateClientCommunicationDetails")]
        public bool UpdateClientCommunicationDetails(List<ApplicantCommunicationDetails> ApplicantCommunicationDetails)
        {
            return Repository.UpdateClientCommunicationDetails(ApplicantCommunicationDetails);
        }

        [HttpPost]
        [Route("UpdateClientPersonalDetails")]
        public bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails)
        {
            return Repository.UpdateClientPersonalDetails(ApplicantPersonalDetails);
        }
    }
}
