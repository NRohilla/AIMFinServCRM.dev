using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FinServUnitOfWork.Interface;
using FinServDataModel;

namespace FinServUnitOfWork.Repository
{
    public class AuthenticateUser : IAuthenticate
    {
        public List<KeyValuePair<Guid, string>> AuthenticateLogin(string UserEmailId, string password) {
            List<KeyValuePair<Guid, string>> AuthenticateResult = new List<KeyValuePair<Guid, string>>();
            return AuthenticateResult;
        }
    }
}