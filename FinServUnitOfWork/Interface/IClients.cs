using System;
using System.Collections.Generic;
using FinServBussinessEntities;
using FinServDataModel;
namespace FinServUnitOfWork.Interface
{
    public interface IClients
    {
        #region AIMFINServ Application
        List<Applicants> GetAllClients();
        List<LoanApplicationForms> GetAllLoanApplications();
        List<Applicants> GetAllApplicantsByLoanID(Guid loanID);

        Applicants GetApplicantDetails(int AutoId);
        Applicants GetClientDetails(Guid ApplicantID);
        LoanApplicationForms GetLoanApplicationDetails(string LoanAppNo);


        #region Qualification_Detail Methods        //Deepak Saini [16-03-2018]
        List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID);
        bool SaveClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails);
        bool UpdateClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails);
        #endregion

        #region Employment_Detail Methods      //Deepak Saini [16-03-2018]
        List<ApplicantEmploymentDetails> GetClientEmploymentDetails(string ClientID);
        bool SaveClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails);
        bool UpdateClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails);
        #endregion

        #region Communication_Detail Methods        //Deepak Saini [16-03-2018]
        List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID);
        bool SaveClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails);
        bool UpdateClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails);
        #endregion

        bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails);
        bool UpdateLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails);
        string SaveLoanApplicationPersonalDetails(Applicants ApplicantPersonalDetails);
        bool SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails ApplicantQualificationDetails);
        bool SaveLoanApplicationEmploymentDetails(ApplicantEmploymentDetails ApplicantEmploymentDetails);
        bool SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails ApplicantCommunicationDetails);

        bool AddGuarantor(LoanGuarantorDetails _objGuarantorDetails);
        List<LoanGuarantorDetails> GetAddedGuarantorGrid(Guid loanAppID);
        LoanGuarantorDetails GetGuarantorDetails(string GuarntID);
        bool UpdateGuarantorDetails(LoanGuarantorDetails _objUpdateGuartDetails);

        bool AddAsset(Asset _objAssetDetails);
        List<Asset> GetAddedAssetGrid(Guid LoanAppNo);
        Asset GetAssetDetails(string AssetID);
        bool UpdateAssetDetails(Asset _objAssetDetails);

        bool AddLiability(Liability _objLiabilityDetails);
        List<Liability> GetAddedLiabilityGrid(Guid LoanAppNo);
        Liability GetLiabilityDetails(string LbltyID);
        bool UpdateLiabilityDetails(Liability _objLiabilityDetails);

        bool AddLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails);
        bool AddExpenseSheet(ApplicantExpenseSheet _objApplicantExpenseSheet);
        List<ApplicantExpenseSheet> GetAddedExpenseSheetGrid(Guid LoanAppNo);

        List<ApplicantExpenseSheet> GetExpenseNetAmount(Guid LoanAppNo);
        ApplicantExpenseSheet GetExpenseSheetDetails(Guid ExpenseID);
        bool UpdateExpenseSheetDetails(ApplicantExpenseSheet _objApplicantExpenseSheet);
        #endregion

        #region Client Dashboard Application Code
        #region Personal Module
        Applicants GetPersonalDetailsByAppID(Guid ApplicantID);
        bool UpdatePersonalDetailsByAppID(Applicants _objApplicantsDetails);
        #endregion

        #region Communication Module
        List<ApplicantCommunicationDetails> GetAddresses(Guid ApplicantID);
        ApplicantCommunicationDetails GetCommunicationDetailsByAppID(Guid ApplicantID);
        bool UpdateAddressesByAppID(ApplicantCommunicationDetails _objApplicantComDetails);
        bool AddNewAddressByAppID(ApplicantCommunicationDetails _objApplicantComDetails);
        ApplicantCommunicationDetails GetCommEditdata(Guid CommunicationID);
        bool DeleteCommAddress(Guid CommunicationID);
        #endregion

        #region Lending Module
        LoanMasterDetails GetLendingDetailsByAppID(Guid ApplicantID);
        bool UpdateLendingDetailsByAppID(LoanMasterDetails _objloanMasterDetails);
        List<LoanMasterDetails> GetMatLendingDetailsByAppID(Guid ApplicantID);
        LoanMasterDetails ViewLendingDetailsByAppID(Guid LANNumber);
        #endregion

        #region Employment Module
        List<ApplicantEmploymentDetails> GetMatEmploymentDetailsByAppID(Guid ApplicantID);
        ApplicantEmploymentDetails ViewEmploymentDetailsByAppID(Guid EmploymentID);
        ApplicantEmploymentDetails GetEmploymentDetailsByAppID(Guid ApplicantID);
        bool UpdateEmploymentDetailsByAppID(ApplicantEmploymentDetails _objApplicantEmploymentDetails);
        #endregion

        #region Qualification Module
        List<ApplicantQualificationDetails> GetMatQualificationDataByAppID(Guid ApplicantID);
        ApplicantQualificationDetails ViewQualificationDetailsByAppID(Guid QualificationID);
        ApplicantQualificationDetails GetQualificationDetailsByAppID(Guid ApplicantID);
        bool UpdateQualificationDetailsByAppID(ApplicantQualificationDetails _objApplicantQualificationDetails);
        #endregion
        #endregion Client Dashboard  
    }
}
