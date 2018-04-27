using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServUnitOfWork.Interface
{
    public interface IAuthenticate
    {
        FinServBussinessEntities.Utility_Classes.AuthenticationDetails AuthenticateLogin(string UserEmailId, string password);
    }
}