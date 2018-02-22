using System.Collections.Generic;
using FinServBussinessEntities;
namespace FinServUnitOfWork.Interface
{
    public interface IClients
    {
        IEnumerable<Applicants> GetAllClients();
        Applicants GetClientDetails(string ClientID);
        List<ApplicantCommunicationDetails> GetClientCommincationDetails(string ClientID);
        List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID);
    }
}
