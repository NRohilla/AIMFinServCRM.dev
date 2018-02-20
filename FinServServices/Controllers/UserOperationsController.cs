using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;

namespace FinServServices.Controllers
{
    [RoutePrefix("API/UserOperations")]
    public class UserOperationsController : ApiController
    {
        IUserOps repository = new UOWUserOps();
        [HttpGet]
        [Route("GetLoggedInUserInfo")]
        public string GetLoggedInUserInfo(string UserEmailId)
        {
            return repository.GetLoggedInUserInfo(UserEmailId);
        }
    }
}
