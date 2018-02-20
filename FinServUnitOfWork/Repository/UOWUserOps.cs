using FinServUnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FinServBussinessEntities;
using FinServDataModel;
using Newtonsoft.Json;

namespace FinServUnitOfWork.Repository
{
    public class UOWUserOps : IUserOps
    {
        public string GetLoggedInUserInfo(string UserEmailId)
        {
            UserOps ObjUserOps = new UserOps();
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                var getuserdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower()).FirstOrDefault();
                if (getuserdetails != null)
                    return JsonConvert.SerializeObject(getuserdetails);
            }
            return string.Empty;
        }
    }
}
