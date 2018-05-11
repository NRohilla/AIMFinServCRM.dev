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

            UserApplicant objapp = new UserApplicant();
             using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchLoggedInUserInfo = (from tu in db.tblUsers 
                                                 join ta in db.tblApplicants on tu.Email equals ta.EmailID
                                                 join tmf in db.tblMasterFileTypes on ta.FileTypeID equals tmf.ID
                                                 where tu.Email == UserEmailId
                                                    select new UserApplicant
                                                    {
                                                        Title = ta.Title,
                                                        ApplicantID = ta.ApplicantID,
                                                        FirstName = ta.FirstName,
                                                        MiddleName = ta.MiddleName,
                                                        LastName = ta.LastName,
                                                        EmailID = ta.EmailID,
                                                        ApplicantImage = ta.ApplicantImage,
                                                        FileName = ta.FileName,
                                                        FileType = tmf.FileType,
                                                        Extension = tmf.Extension,
                                                        FileTypeID = tmf.ID,
                                                        DisplayName = tu.DisplayName,
                                                        Mobile = tu.Mobile,
                                                        Email = tu.Email,
                                                        Password = tu.Password,
                                                        PasswordExpired = tu.PasswordExpired,
                                                        LastPasswordChangedOn = tu.LastPasswordChangedOn,
                                                        PasswordResetToken = tu.PasswordResetToken,
                                                        FailedPasswordAttempts = tu.FailedPasswordAttempts,
                                                        AccountExpired = tu.AccountExpired,
                                                        AccountLocked = tu.AccountLocked,
                                                        ActivaitonCode = tu.ActivaitonCode,
                                                        Description = tu.Description,
                                                        LocationId = tu.LocationId
                                                    }).FirstOrDefault();

                    return JsonConvert.SerializeObject(fetchLoggedInUserInfo);
            }
        }
    }
}
