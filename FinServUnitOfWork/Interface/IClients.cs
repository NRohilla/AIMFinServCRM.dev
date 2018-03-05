using System.Collections.Generic;
using FinServBussinessEntities;
using FinServDataModel;
namespace FinServUnitOfWork.Interface
{
    public interface IClients
    {
        List<Applicants> GetAllClients();
        Applicants GetClientDetails(string ClientID);
        List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID);
        List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID);
        List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID);
        bool UpdateClientEmploymentDetails(List<ApplicantEmployementDetails> _ApplicantEmployementDetails);
        bool UpdateClientCommunicationDetails(List<ApplicantCommunicationDetails> ApplicantCommunicationDetails);
        bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails);
    }
}
