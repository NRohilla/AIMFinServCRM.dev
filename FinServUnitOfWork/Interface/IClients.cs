﻿using System.Collections.Generic;
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
        List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID);
        List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID);
        List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID);
        bool UpdateClientEmploymentDetails(List<ApplicantEmployementDetails> _ApplicantEmployementDetails);
        bool UpdateClientCommunicationDetails(List<ApplicantCommunicationDetails> ApplicantCommunicationDetails);
        bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails);
        bool UpdateLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails);
        string SaveLoanApplicationPersonalDetails(Applicants ApplicantPersonalDetails);
        bool SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails ApplicantQualificationDetails);
        bool SaveLoanApplicationEmployementDetails(ApplicantEmployementDetails ApplicantEmployementDetails);
        bool SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails ApplicantCommunicationDetails);
        bool AddGuarantor(LoanGuarantorDetails LoanGuarantorDetails);
        List<LoanGuarantorDetails> GetGuarantor();
        LoanGuarantorDetails GetGuarantorDetails(string GuarntID);

       bool UpdateGuarantorDetails(LoanGuarantorDetails LoanGuarantorDetails);

    }
}
