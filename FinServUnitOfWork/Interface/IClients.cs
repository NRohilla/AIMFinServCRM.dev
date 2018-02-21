using System.Collections.Generic;
using FinServBussinessEntities;
namespace FinServUnitOfWork.Interface
{
    public interface IClients
    {
        IEnumerable<Applicants> GetAllClients();
    }
}
