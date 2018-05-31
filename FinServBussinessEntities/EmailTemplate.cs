using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class EmailTemplate
    {
        public long UserId { get; set; }
        public System.Guid UserGuid { get; set; }
        public string LoginID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Mobile { get; set; }
        public string EmailID { get; set; }
        public string Password { get; set; }
        public Nullable<bool> PasswordExpired { get; set; }
        public string LastPasswordChangedOn { get; set; }
        public string PasswordResetToken { get; set; }
    }
}
