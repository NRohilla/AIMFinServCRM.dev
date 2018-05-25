using FinServUnitOfWork.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace FinServUnitOfWork.Repository
{
   public class UOWGoogleServices : IGoogleServices
    {
        public string SendEmail()
        {
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com", 587);
            SmtpServer.Credentials = new System.Net.NetworkCredential("nbambah93@gmail.com", "neh@12345");
            SmtpServer.EnableSsl = true;

            mail.From = new MailAddress("nbambah93@gmail.com");
            mail.To.Add("nehabambah@virtualemployee.com");
            mail.CC.Add("deepaksaini@virtualemployee.com");
            mail.Subject = "Test";
            mail.Body = "This is test mail";

            SmtpServer.Send(mail);
            mail.Dispose();
            return "sent";
    }

    }
}
