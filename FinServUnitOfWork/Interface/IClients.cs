using System.Collections.Generic;
using FinServBussinessEntities;
using FinServDataModel;
namespace FinServUnitOfWork.Interface
{
    public interface IClients
    {
        List<Applicants> GetAllClients();
        List<LoanApplicationForms> GetAllLoanApplications();
        Applicants GetClientDetails(string ClientID);
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

        bool AddGuarantor(LoanGuarantorDetails LoanGuarantorDetails);
        List<LoanGuarantorDetails> GetGuarantor();
        LoanGuarantorDetails GetGuarantorDetails(string GuarntID);

        bool UpdateGuarantorDetails(LoanGuarantorDetails LoanGuarantorDetails);


    }
}
