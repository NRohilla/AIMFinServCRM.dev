using System;
using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using FinServBussinessEntities;
using System.Linq;

namespace FinServUnitOfWork.Repository
{
    public class AuthenticateUser : IAuthenticate
    {
        public FinServBussinessEntities.Utility_Classes.AuthenticationDetails AuthenticateLogin(string UserEmailId, string password)
        {
            FinServBussinessEntities.Utility_Classes.AuthenticationDetails objReturnobj = new FinServBussinessEntities.Utility_Classes.AuthenticationDetails();

            objReturnobj._IsAuthenticated = false;

            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                //the user is authenticated on admin website and landed on client
                if (password == null || password.Trim().Length == 0 || password.Trim() == "undefined".Trim())
                {
                    var getuserdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower()).FirstOrDefault();
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
                                objReturnobj.ActivaitonCode = getuserdetails.ActivaitonCode;
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
                else
                {
                    //the user is authenticated and stays on admin website
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

                                if (objReturnobj._RoleDesc == "Admin")
                                {
                                    objReturnobj._IsAuthenticated = true;
                                    objReturnobj._RoleDesc = getRole.Name;
                                    objReturnobj._UserID = Convert.ToString(getuserdetails.UserGuid);
                                    objReturnobj.IsLoggedIn = true;
                                    objReturnobj.ActivaitonCode = LoggedInUser(UserEmailId, password);
                                }
                                if (objReturnobj._RoleDesc == "Client")
                                {
                                    var getApplicantID = db.tblApplicants.Where(p => p.EmailID == UserEmailId).FirstOrDefault();
                                    if (getApplicantID != null)
                                    objReturnobj._ApplicantID = Convert.ToString(getApplicantID.ApplicantID);
                                    objReturnobj.IsLoggedIn = true;
                                    objReturnobj.ActivaitonCode = LoggedInUser(UserEmailId, password);
                                }
                            }
                        }
                    }
                }

            }
            return objReturnobj;
        }
        private string LoggedInUser(string UserEmailId, string password)
        {
            using ( AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                string strActcode = string.Empty;
                var getusrdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower() && p.Password.ToLower() == password.ToLower()).FirstOrDefault();
                if (getusrdetails != null)
                {
                    getusrdetails.IsLoggedIn = true;
                    getusrdetails.LastLoggedOn = DateTime.Now;
                    strActcode = Guid.NewGuid().ToString().Substring(0, 7);
                    getusrdetails.ActivaitonCode = strActcode;
                    db.SaveChanges();                    
                }
                return strActcode;
            }
        }

        public bool IsUserLoggedIn(string UserEmailId, string password)
        {
            bool status = false;
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {                
                var getusrdetails = db.tblUsers.Where(p => p.Email.ToLower() == UserEmailId.ToLower() && p.Password.ToLower() == password.ToLower()).FirstOrDefault();
                if (getusrdetails != null)
                {
                    if(getusrdetails.IsLoggedIn == true && getusrdetails.ActivaitonCode != null && getusrdetails.ActivaitonCode != string.Empty)
                    {
                        status = true;
                    }
                    else
                    {
                        status = false;
                    }                    
                }

                return status;
            }
        }

        public bool LoggedOffUser(string ActivationCode, bool IsLoggedIn)
        {
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                string activationcode = ActivationCode.ToString();
                var getuserdetails = db.tblUsers.Where(p => p.ActivaitonCode == activationcode && p.IsLoggedIn == true).FirstOrDefault();
                if (getuserdetails != null)
                {
                    getuserdetails.IsLoggedIn = false;
                    getuserdetails.ActivaitonCode = string.Empty;
                    db.SaveChanges();
                }
                return true;
            }
        }
    }
}