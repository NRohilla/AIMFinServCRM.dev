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

        #region AIMFINSERV Application 
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
        public Applicants GetClientDetails(Guid ApplicantID)
        {
            return Repository.GetClientDetails(ApplicantID);
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
        public Asset GetAssetDetails(string AssetID)
        {
            return Repository.GetAssetDetails(AssetID);
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
        [Route("GetExpenseNetAmount")]
        public List<ApplicantExpenseSheet> GetExpenseNetAmount(Guid LoanAppNo)
        {
            return Repository.GetExpenseNetAmount(LoanAppNo);
        }

        [HttpGet]
        [Route("GetExpenseSheetDetails")]
        public ApplicantExpenseSheet GetExpenseSheetDetails(Guid ExpenseID)
        {
            return Repository.GetExpenseSheetDetails(ExpenseID);
        }
        [HttpPost]
        [Route("UpdateExpenseSheetDetails")]
        public bool UpdateExpenseSheetDetails(ApplicantExpenseSheet _objApplicantExpenseSheet)
        {
            return Repository.UpdateExpenseSheetDetails(_objApplicantExpenseSheet);
        }
        #endregion

        #region Client Dashboard Application Code
        #region Personal Module
        [HttpGet]
        [Route("GetPersonalDetailsByAppID")]
        public Applicants GetPersonalDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetPersonalDetailsByAppID(ApplicantID);
        }
        [HttpPost]
        [Route("UpdatePersonalDetailsByAppID")]
        public bool UpdatePersonalDetailsByAppID(Applicants _objApplicantsDetails)
        {
            return Repository.UpdatePersonalDetailsByAppID(_objApplicantsDetails);
        }
        #endregion

        #region Communication Module
        [HttpGet]
        [Route("GetAddresses")]
        public List<ApplicantCommunicationDetails> GetAddresses(Guid ApplicantID)
        {
            return Repository.GetAddresses(ApplicantID);
        }
        [HttpGet]
        [Route("GetCommunicationDetailsByAppID")]
        public ApplicantCommunicationDetails GetCommunicationDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetCommunicationDetailsByAppID(ApplicantID);
        }
        [HttpPost]
        [Route("UpdateAddressesByAppID")]
        public bool UpdateAddressesByAppID(ApplicantCommunicationDetails _objApplicantComDetails)
        {
            return Repository.UpdateAddressesByAppID(_objApplicantComDetails);
        }
        [HttpPost]
        [Route("AddNewAddressByAppID")]
        public bool AddNewAddressByAppID(ApplicantCommunicationDetails _objApplicantComDetails)
        {
            return Repository.AddNewAddressByAppID(_objApplicantComDetails);
        }
        [HttpGet]
        [Route("GetCommEditdata")]
        public ApplicantCommunicationDetails GetCommEditdata(Guid CommunicationID)
        {
            return Repository.GetCommEditdata(CommunicationID);
        }
        [HttpDelete]
        [Route("DeleteCommAddress")]
        public bool DeleteCommAddress(Guid CommunicationID)
        {
            return Repository.DeleteCommAddress(CommunicationID);
        }
        #endregion

        #region Lending Module
        [HttpGet]
        [Route("GetLendingDetailsByAppID")]
        public LoanMasterDetails GetLendingDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetLendingDetailsByAppID(ApplicantID);
        }
        [HttpPost]
        [Route("UpdateLendingDetailsByAppID")]
        public bool UpdateLendingDetailsByAppID(LoanMasterDetails _objloanMasterDetails)
        {
            return Repository.UpdateLendingDetailsByAppID(_objloanMasterDetails);
        }
        [HttpGet]
        [Route("ViewLendingDetailsByAppID")]
        public LoanMasterDetails ViewLendingDetailsByAppID(Guid LANNumber)
        {
            return Repository.ViewLendingDetailsByAppID(LANNumber);
        }
        [HttpGet]
        [Route("GetMatLendingDetailsByAppID")]
        public List<LoanMasterDetails> GetMatLendingDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetMatLendingDetailsByAppID(ApplicantID);
        }
        #endregion

        #region Employment Module
        [HttpGet]
        [Route("GetEmploymentDetailsByAppID")]
        public ApplicantEmploymentDetails GetEmploymentDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetEmploymentDetailsByAppID(ApplicantID);
        }
        [HttpPost]
        [Route("UpdateEmploymentDetailsByAppID")]
        public bool UpdateEmploymentDetailsByAppID(ApplicantEmploymentDetails _objApplicantEmploymentDetails)
        {
            return Repository.UpdateEmploymentDetailsByAppID(_objApplicantEmploymentDetails);
        }
        [HttpGet]
        [Route("GetMatEmploymentDetailsByAppID")]
        public List<ApplicantEmploymentDetails> GetMatEmploymentDetailsByAppID(Guid ApplicantID)
        {
            return Repository.GetMatEmploymentDetailsByAppID(ApplicantID);
        }
        [HttpGet]
        [Route("ViewEmploymentDetailsByAppID")]
        public ApplicantEmploymentDetails ViewEmploymentDetailsByAppID(Guid EmploymentID)
        {
            return Repository.ViewEmploymentDetailsByAppID(EmploymentID);
        }
        #endregion

        #region Qualification Module
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
        [HttpGet]
        [Route("GetMatQualificationDataByAppID")]
        public List<ApplicantQualificationDetails> GetMatQualificationDataByAppID(Guid ApplicantID)
        {
            return Repository.GetMatQualificationDataByAppID(ApplicantID);
        }
        [HttpGet]
        [Route("ViewQualificationDetailsByAppID")]
        public ApplicantQualificationDetails ViewQualificationDetailsByAppID(Guid QualificationID)
        {
            return Repository.ViewQualificationDetailsByAppID(QualificationID);
        }
        #endregion
        #endregion
    }
}
