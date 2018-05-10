using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/Auth")]
    public class AuthController : ApiController
    {
        IAuthenticate repository = new AuthenticateUser();
        [HttpGet]
        [Route("AuthenticateLogin")]
        public FinServBussinessEntities.Utility_Classes.AuthenticationDetails AuthenticateLogin(string UserEmailId, string password)
        {
            return repository.AuthenticateLogin(UserEmailId, password);
        }

        [HttpPost]
        [Route("LoggedOffUser")]
        public bool LoggedOffUser(string ActivationCode, bool IsLoggedIn)
        {
            return repository.LoggedOffUser(ActivationCode, IsLoggedIn);
        }

    }
}
