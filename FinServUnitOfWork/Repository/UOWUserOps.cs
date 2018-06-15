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
                                                        DisplayName = tu.DisplayName,
                                                        Mobile = tu.Mobile,
                                                        Email = tu.Email,
                                                        Password = tu.Password,
                                                        LastLoggedOn = tu.LastLoggedOn,                                                                                                               
                                                        ActivaitonCode = tu.ActivaitonCode,
                                                        Description = tu.Description                                                        
                                                    }).FirstOrDefault();

                    return JsonConvert.SerializeObject(fetchLoggedInUserInfo);
            }
        }
    }
}
