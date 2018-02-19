using System;
using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using System.Linq;

namespace FinServUnitOfWork.Repository
{
    public class AuthenticateUser : IAuthenticate
    {
        public bool AuthenticateLogin(string UserEmailId, string password)
        {
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                var getuserdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower() && p.Password.ToLower() == password.ToLower()).FirstOrDefault();
                if (getuserdetails != null)
                    return true;
            }
            return false;
        }
    }
}