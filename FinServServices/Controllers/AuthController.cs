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
    }
}
