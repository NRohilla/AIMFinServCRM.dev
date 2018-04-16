using System;
using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using System.Linq;

namespace FinServUnitOfWork.Repository
{
    public class AuthenticateUser : IAuthenticate
    {
        public FinServBussinessEntities.Utility_Classes.AuthenticationDetails AuthenticateLogin(string UserEmailId, string password)
        {
            FinServBussinessEntities.Utility_Classes.AuthenticationDetails objReturnobj
                = new FinServBussinessEntities.Utility_Classes.AuthenticationDetails();
            objReturnobj._IsAuthenticated = false;

            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                var getuserdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower() && p.Password.ToLower() == password.ToLower()).FirstOrDefault();
                if (getuserdetails != null)
                {
                    var getUserRole = db.tblUsersRoles.Where(p => p.UserGuid == getuserdetails.UserGuid).FirstOrDefault();
                    if (getUserRole != null)
                    {
                        var getRole = db.tblRoles.Where(p => p.RoleGuid == getUserRole.RoleGuid).FirstOrDefault();
                        if (getRole != null)
                        {
                            objReturnobj._IsAuthenticated = true;
                            objReturnobj._RoleDesc = getRole.Name;
                            objReturnobj._UserID = Convert.ToString(getuserdetails.UserGuid);

                            if (objReturnobj._RoleDesc == "Client")
                            {
                                var getApplicantID = db.tblApplicants.Where(p => p.EmailID == UserEmailId).FirstOrDefault();
                                if (getApplicantID != null)
                                    objReturnobj._ApplicantID = Convert.ToString(getApplicantID.ApplicantID);
                            }
                        }
                    }
                }
            }
            return objReturnobj;
        }
    }
}