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
        
                
        #region Client_Communication_Detail Methods         //Deepak Saini [16-03-2018]

        [HttpGet]
        [Route("GetClientCommunicationDetails")]
        public List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID)
        {
            return Repository.GetClientCommunicationDetails(ClientID);
        }

        [HttpPost]
        [Route("SaveClientCommunicationDetails")]
        public bool SaveClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails)
        {
            return Repository.SaveClientCommunicationDetails(_objApplicantCommDetails);
        }

        [HttpPost]
        [Route("UpdateClientCommunicationDetails")]
        public bool UpdateClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails)
        {
            return Repository.UpdateClientCommunicationDetails(_objApplicantCommDetails);
        }

        #endregion

        #region Client_Employment_Detail Methods         //Deepak Saini [16-03-2018]

        [HttpGet]
        [Route("GetClientemploymentDetails")]
        public List<ApplicantEmploymentDetails> GetClientemploymentDetails(string ClientID)
        {
            return Repository.GetClientEmploymentDetails(ClientID);
        }

        [HttpPost]
        [Route("SaveClientEmploymentDetails")]
        public bool SaveClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails)
        {
            return Repository.SaveClientEmploymentDetails(_objEmploymentDetails);
        }

        [HttpPost]
        [Route("UpdateClientEmploymentDetails")]
        public bool UpdateClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails)
        {
            return Repository.UpdateClientEmploymentDetails(_objEmploymentDetails);
        }

        #endregion

        #region Client_Qualification_Detail Methods         //Deepak Saini [16-03-2018]

        [HttpGet]
        [Route("GetClientQualificationDetails")]
        public List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID)
        {
            return Repository.GetClientQualificationDetails(ClientID);
        }

        [HttpPost]
        [Route("UpdateClientQualificationDetails")]
        public bool UpdateClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails)
        {
            return Repository.UpdateClientQualificationDetails(_objQualificationDetails);
        }
        
        [HttpPost]
        [Route("SaveClientQualificationDetails")]
        public bool SaveClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails)
        {
            return Repository.SaveClientQualificationDetails(_objQualificationDetails);
        }

        #endregion

        

        [HttpPost]
        [Route("UpdateClientPersonalDetails")]
        public bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails)
        {
            return Repository.UpdateClientPersonalDetails(ApplicantPersonalDetails);
        }

        [HttpPost]
        [Route("UpdateLoanApplicationDetails")]
        public bool UpdateLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails)
        {
            return Repository.UpdateLoanApplicationDetails(LoanApplicationDetails);
        }
        [HttpPost]
        [Route("SaveLoanApplicationPersonalDetails")]
        public string SaveLoanApplicationPersonalDetails(Applicants ApplicantPersonalDetails)
        {
            return Repository.SaveLoanApplicationPersonalDetails(ApplicantPersonalDetails);
        }
        [HttpPost]
        [Route("SaveLoanApplicationQualificationDetails")]
        public bool SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails ApplicantQualificationDetails)
        {
            return Repository.SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails);
        }
        [HttpPost]
        [Route("SaveLoanApplicationemploymentDetails")]
        public bool SaveLoanApplicationEmploymentDetails(ApplicantEmploymentDetails ApplicantemploymentDetails)
        {
            return Repository.SaveLoanApplicationEmploymentDetails(ApplicantemploymentDetails);
        }
        [HttpPost]
        [Route("SaveLoanApplicationCommunicationDetails")]
        public bool SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails ApplicantCommunicationDetails)
        {
            return Repository.SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails);
        }

    }
}
