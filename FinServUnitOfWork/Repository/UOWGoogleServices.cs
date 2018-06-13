using FinServUnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using FinServBussinessEntities;
using FinServDataModel;
using System.Web.Configuration;

namespace FinServUnitOfWork.Repository
{
    public class UOWGoogleServices : IGoogleServices
    {
        //public string SendEmail(string chooseTemplate)
        //private string SendEmail(string str)
        //{
        //    MailMessage mail = new MailMessage();
        //    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com", 587);
        //    SmtpServer.Credentials = new System.Net.NetworkCredential("ve.dksaini@gmail.com", "sandy@9871");
        //    SmtpServer.EnableSsl = true;

        //    mail.From = new MailAddress("ve.dksaini@gmail.com");
        //    mail.To.Add("nehabambah@virtualemployee.com");
        //    mail.CC.Add("deepaksaini@virtualemployee.com");
        //    mail.Subject = "Test";
        //    // "This is test mail";
        //    //  mail.Body =  GenerateNewLetterTemplate();
        //    mail.IsBodyHtml = true;
        //    //if chooseTemplate="New" call GenerateNewLetterTemplate() and if chooseTemplate="ChangePassword" call GenerateTemplateForPassword

        //    // mail.Body = System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("EmailTemplates/ChangePassword.html"));
        //    //Body = Body.Replace("#ClientName#", _lstGetDealerRoleAndContactInfoByCompanyIDResult[0].CompanyName);
        //    SmtpServer.Send(mail);
        //    mail.Dispose();
        //    return "sent";
        //}


        public bool GenerateUserTemplate(Guid UserGuid)
        {
            EmailTemplate objToReturn = new EmailTemplate();
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                var GetEmailTemplateDetails = db.tblUsers.Where(p => p.UserGuid == UserGuid).FirstOrDefault();
                if (GetEmailTemplateDetails != null)
                {
                    objToReturn.EmailID = GetEmailTemplateDetails.Email;
                    objToReturn.DisplayName = GetEmailTemplateDetails.DisplayName;
                    objToReturn.Password = GetEmailTemplateDetails.Password;
                    objToReturn.UserId = GetEmailTemplateDetails.UserId;

                }

                // string clientName = "Mahesh";
                string Email = WebConfigurationManager.AppSettings["ClientEmailId"];
                string Password = WebConfigurationManager.AppSettings["ClientPassword"];

                string str = null;
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com", 587);
                SmtpServer.Credentials = new System.Net.NetworkCredential(Email, Password);
                SmtpServer.EnableSsl = true;

                mail.From = new MailAddress("ve.dksaini@gmail.com");
                mail.To.Add("nehabambah@virtualemployee.com");
                mail.CC.Add("deepaksaini@virtualemployee.com");
                mail.Subject = "Test";
                // "This is test mail";
                mail.Body = str;
                mail.IsBodyHtml = true;



                str = @"<!doctype html>
            <html>
<body>
    <div style='font-size: 16px; padding-bottom: 0px; margin:0px auto; color: black; padding-top: 0px; font-family: Arial, Helvetica, sans-serif; width:722px; border:none;'>
        <table width='100%' border='0' cellpadding='0' cellspacing='0' bgcolor='#1b9ec5' style='border: none; margin:auto;'>
            <tbody>
                <tr><td valign='top' align='center' style='padding:10px;'><img src='http://aimfinancialservices.co.nz/wp-content/uploads/2016/07/AIM_white.png' alt='' width='182' style='border:0; display:block; margin-top:5px;'></td></tr>
                <tr>
                    <td width='100%'>
                        <h2 style='text-align:center; color:#FFF; margin:0px; padding:0px;'><em>Welcome to Aim Financial Services</em></h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width='100%' border='0' cellspacing='0' cellpadding='0' bgcolor='#1b9ec5'>
                            <tr>
                                <td>
                                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                        <tr><td colspan='3' height='20'></td> </tr>
                                        <tr>
                                            <td width='20'></td>
                                            <td bgcolor='#ffffff'>
                                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                    <tr>
                                                        <td>
                                                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                                <tr>
                                                                    <td width=' 34'>&nbsp;</td>
                                                                    <td align='center'>
                                                                        <table border='0' cellspacing='0' cellpadding='0'>
                                                                            <tr><td height='37'></td></tr>
                                                                            <tr><td style='color:#626f78; font-size: 21px' align='center'>Dear";
                str += "   ";
                str += objToReturn.DisplayName;
                str += @"</td></tr>
                                                                            <tr><td height='11'></td></tr>
                                                                            <tr><td align='center' style='color:#626f78; font-size: 17px'>You have successfully registered to AIM! </td></tr>
                                                                            <tr>
                                                                                <td height='20' width='100%'></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td width=' 34'>&nbsp;</td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                                <tr>
                                                                    <td width='100%'>
                                                                        <table width='100%'>
                                                                            <tr>
                                                                                <td width='10%;'></td>
                                                                                <td width='80%;' style='padding-top:20px; padding-bottom:20px;'>
                                                                                    <p style='color:#626f78; font-size: 14px' align='center'><strong>UserId:</strong>";
                str += " ";
                str +=objToReturn.EmailID;
                str += @"</p>
                                                                                    <p style='color:#626f78; font-size: 14px' align='center'><strong>Password:</strong>";
                str += " ";
                str += objToReturn.Password;
                str+= @"</p>
                                                                                </td>
                                                                                <td width='10%;'></td>
                                                                            </tr>
                                                                        </table>


                                                                    </td>
                                                                </tr>



                                                                <tr><td height='60px' style='color:#626f78; font-size: 14px' align='center'>To review and update your profile, please log on to AIM. </td></tr>
                                                                <tr><td height='10'></td></tr>
                                                                <tr>
                                                                    <td bgcolor='#ebebeb' align='center' valign='middle' height='120'>
                                                                        <a href='http://localhost:8080/login' click='LoginHereClick()' style='width:170px; padding:15px; text-align:center; border-radius:20px; display:block; background:#269226; text-decoration:none; color:#FFF;'> Login Here</a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td width='20'></td>
                                        </tr>
                                        <tr><td colspan='3' height='20'></td></tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                        <tr>
                                            <td width='19'>&nbsp;</td>
                                            <td>
                                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                    <tr>
                                                        <td style='color:#ededed; font-size: 12px'>
                                                            <p>
                                                                <strong>Contact Number:</strong> 09 282 3782 <br /> <strong>Email:</strong> nfo@aimfs.co.nz <br /> <strong>Website:</strong> http://aimfinancialservices.co.nz/
                                                            </p>
                                                        </td>


                                                    </tr>
                                                </table>
                                            </td>
                                            <td width='19'>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td height='20'></td></tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
 ";
                mail.Body = str;
                mail.IsBodyHtml = true;
                SmtpServer.Send(mail);
                mail.Dispose();
                return true;
            }
        }

        public bool GeneratePasswordTemplate(Guid UserGuid) {

            EmailTemplate objToReturn = new EmailTemplate();
            using (AIMFinServDBEntities db = new AIMFinServDBEntities())
            {
                var GetEmailTemplateDetails = db.tblUsers.Where(p => p.UserGuid == UserGuid).FirstOrDefault();
                if (GetEmailTemplateDetails != null)
                {
                    objToReturn.EmailID = GetEmailTemplateDetails.Email;
                    objToReturn.DisplayName = GetEmailTemplateDetails.DisplayName;
                    objToReturn.Password = GetEmailTemplateDetails.Password;
                    objToReturn.UserId = GetEmailTemplateDetails.UserId;

                }

                // string clientName = "Mahesh";
                string Email = WebConfigurationManager.AppSettings["ClientEmailId"];
                string Password = WebConfigurationManager.AppSettings["ClientPassword"];

                string str = null;
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com", 587);
                SmtpServer.Credentials = new System.Net.NetworkCredential(Email, Password);
                SmtpServer.EnableSsl = true;

                mail.From = new MailAddress("ve.dksaini@gmail.com");
                mail.To.Add("nehabambah@virtualemployee.com");
                mail.CC.Add("deepaksaini@virtualemployee.com");
                mail.Subject = "Test";
                // "This is test mail";
                mail.Body = str;
                mail.IsBodyHtml = true;

                str = @"<!doctype html>
             <html>
                <body>
                    <div style='font-size: 16px; padding-bottom: 0px; margin:0px auto; color: black; padding-top: 0px; font-family: Arial, Helvetica, sans-serif; width:722px; border:none;'>
                        <table width='100%' border='0' cellpadding='0' cellspacing='0' bgcolor='#1b9ec5' style='border: none; margin:auto;'>
                            <tbody>
                                <tr><td valign='top' align='center' style='padding:10px;'><img src='http://aimfinancialservices.co.nz/wp-content/uploads/2016/07/AIM_white.png' alt='' width='182' style='border:0; display:block; margin-top:5px;'></td></tr>
                                <tr>
                                    <td width='100%'>
                                        <h2 style='text-align:center; color:#FFF; margin:0px; padding:0px;'><em>Welcome to Aim Financial Services</em></h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width='100%' border='0' cellspacing='0' cellpadding='0' bgcolor='#1b9ec5'>
                            <tr>
                                <td>
                                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                        <tr><td colspan='3' height='20'></td> </tr>
                                        <tr>
                                            <td width='20'></td>
                                            <td bgcolor='#ffffff'>
                                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                    <tr>
                                                        <td>
                                                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                                <tr>
                                                                    <td width=' 34'>&nbsp;</td>
                                                                    <td align='center'>
                                                                        <table border='0' cellspacing='0' cellpadding='0'>
                                                                            <tr><td height='37'></td></tr>
                                                                      <tr><td style='color:#626f78; font-size: 21px' align='center'>Dear";
                str += "   ";
                str += objToReturn.DisplayName;
                str += @"</td></tr>
                                                                            <tr><td height='11'></td></tr>
                                                                            <tr><td align='center' style='color:#626f78; font-size: 14px'>Your password has been successfully changed</td></tr>
                                                                            <tr>
                                                                                <td height='20' width='100%'></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td width=' 34'>&nbsp;</td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                                <tr>
                                                                    <td width='100%'>
                                                                        <table width='100%'>
                                                                            <tr>
                                                                                <td width='10%;'></td>
                                                                                <td width='80%;' style='padding-top:20px; padding-bottom:20px;'>
                                                                                    <p style='color:#819196; font-size: 14px' align='center'><strong>UserId:</strong> <span style='color:#626f78; font-size: 14px;'>";
                str += objToReturn.EmailID;
                str += @"</span></p>
                                                                                    <p style='color:#819196; font-size: 14px' align='center'><strong>Password:</strong> <span style='color:#626f78; font-size: 14px;'>";
                str += objToReturn.Password;
    str +=@" </span></p>
                                                                                </td>
                                                                                <td width='10%;'></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr><td height='40px' style='color:#819096; font-size: 14px' align='center'><strong>Disclaimer:</strong> <em>If it is not done by you, then please contact to Admin.</em> </td></tr>
                                                                <tr><td height='10'></td></tr>
                                                                <tr>
                                                                    <td bgcolor='#ebebeb' align='center' valign='middle' height='120'>
                                                                        <a href='#EmailUrl#' click='LoginHereClick()' style='width:170px; padding:15px; text-align:center; border-radius:20px; display:block; background:#269226; text-decoration:none; color:#FFF;'> Login Here</a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td> 
                                            <td width='20'></td>
                                        </tr>
                                        <tr><td colspan='3' height='20'></td></tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                        <tr>
                                            <td width='19'>&nbsp;</td>
                                            <td>
                                                <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                    <tr>
                                                        <td style='color:#ededed; font-size: 12px'>
                                                            <p>
                                                                <strong>Contact Number:</strong> 09 282 3782 <br /> <strong>Email:</strong> nfo@aimfs.co.nz <br /> <strong>Website:</strong> http://aimfinancialservices.co.nz/
                                                            </p>
                                                        </td>


                                                    </tr>
                                                </table>
                                            </td>
                                            <td width='19'>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td height='20'></td></tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html> ";
                mail.Body = str;
                mail.IsBodyHtml = true;
                SmtpServer.Send(mail);
                mail.Dispose();
                return true;
            }
        }


    }
}
