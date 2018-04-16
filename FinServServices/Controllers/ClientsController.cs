using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using FinServDataModel;
using System;

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
        [Route("GetApplicantDetails")]
        public Applicants GetApplicantDetails(int AutoId)
        {
            return Repository.GetApplicantDetails(AutoId);
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
        [Route("GetAllApplicantsByLoanID")]
        public List<Applicants> GetAllApplicantsByLoanID(Guid loanID)
        {
            return Repository.GetAllApplicantsByLoanID(loanID);
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
        [HttpPost]
        [Route("AddGuarantorDetails")]
        public bool AddGuarantor(LoanGuarantorDetails _objGuarantorDetails)
        {
            return Repository.AddGuarantor(_objGuarantorDetails);
        }
        [HttpGet]
        [Route("GetAddedGuarantorGrid")]
        public List<LoanGuarantorDetails> GetAddedGuarantorGrid(Guid loanAppID)
        {
            return Repository.GetAddedGuarantorGrid(loanAppID);
        }
  
        [HttpGet]
        [Route("GetGuarantorDetails")]
        public LoanGuarantorDetails GetGuarantorDetails(string GuarntID)
        {
            return Repository.GetGuarantorDetails(GuarntID);
        }

        [HttpPost]
        [Route("UpdateGuarantorDetails")]
        public bool UpdateGuarantorDetails(LoanGuarantorDetails _objUpdateGuartDetails)
        {
            return Repository.UpdateGuarantorDetails(_objUpdateGuartDetails);
        }
        [HttpPost]
        [Route("AddAsset")]
        public bool AddAsset(Asset _objAssetDetails)
        {
            return Repository.AddAsset(_objAssetDetails);
        }
        [HttpGet]
        [Route("GetAddedAssetGrid")]
        public List<Asset> GetAddedAssetGrid(Guid LoanAppNo)
        {
            return Repository.GetAddedAssetGrid(LoanAppNo);
        }

        [HttpGet]
        [Route("GetAssetDetails")]
        public Asset GetAssetDetails(string ClientID)
        {
            return Repository.GetAssetDetails(ClientID);
        }

        [HttpPost]
        [Route("UpdateAssetDetails")]
        public bool UpdateAssetDetails(Asset _objAssetDetails)
        {
            return Repository.UpdateAssetDetails(_objAssetDetails);
        }

        [HttpPost]
        [Route("AddLiability")]
        public bool AddLiability(Liability _objLiabilityDetails)
        {
            return Repository.AddLiability(_objLiabilityDetails);
        }
        [HttpGet]
        [Route("GetAddedLiabilityGrid")]
        public List<Liability> GetAddedLiabilityGrid(Guid LoanAppNo)
        {
            return Repository.GetAddedLiabilityGrid(LoanAppNo);
        }

        [HttpGet]
        [Route("GetLiabilityDetails")]
        public Liability GetLiabilityDetails(string LbltyID)
        {
            return Repository.GetLiabilityDetails(LbltyID);
        }

        [HttpPost]
        [Route("UpdateLiabilityDetails")]
        public bool UpdateLiabilityDetails(Liability _objLiabilityDetails)
        {
            return Repository.UpdateLiabilityDetails(_objLiabilityDetails);
        }
        [HttpPost]
        [Route("AddLoanApplicationDetails")]
        public bool AddLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails)
        {
            return Repository.AddLoanApplicationDetails(LoanApplicationDetails);
        }
        [HttpPost]
        [Route("AddExpenseSheet")]
        public bool AddExpenseSheet(ApplicantExpenseSheet _objApplicantExpenseSheet)
        {
            return Repository.AddExpenseSheet(_objApplicantExpenseSheet);
        }

        [HttpGet]
        [Route("GetAddedExpenseSheetGrid")]
        public List<ApplicantExpenseSheet> GetAddedExpenseSheetGrid(Guid LoanAppNo)
        {
            return Repository.GetAddedExpenseSheetGrid(LoanAppNo);
        }

        [HttpGet]
        [Route("GetExpenseSheetDetails")]
        public ApplicantExpenseSheet GetExpenseSheetDetails(Guid ApplicantID)
        {
            return Repository.GetExpenseSheetDetails(ApplicantID);
        }
        [HttpPost]
        [Route("UpdateExpenseSheetDetails")]
        public bool UpdateExpenseSheetDetails(ApplicantExpenseSheet _objApplicantExpenseSheet)
        {
            return Repository.UpdateExpenseSheetDetails(_objApplicantExpenseSheet);
        }

        [HttpGet]
        [Route("GetQualificationDetailsByAppID")]
        public ApplicantQualificationDetails GetQualificationDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetQualificationDetailsByAppID(ApplicantID);
        }
        [HttpPost]
        [Route("UpdateQualificationDetailsByAppID")]
        public bool UpdateQualificationDetailsByAppID(ApplicantQualificationDetails _objApplicantQualificationDetails)
        {
            return Repository.UpdateQualificationDetailsByAppID(_objApplicantQualificationDetails);
        }


    }
}
