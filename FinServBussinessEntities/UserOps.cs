using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class UserOps
    {
        public long UserId { get; set; }
        public System.Guid UserGuid { get; set; }
        public string LoginID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Nullable<bool> PasswordExpired { get; set; }
        public string LastPasswordChangedOn { get; set; }
        public string PasswordResetToken { get; set; }
        public string Role { get; set; }
        public Nullable<int> FailedPasswordAttempts { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public string CreatedOn { get; set; }
        public Nullable<System.DateTime> LastLoggedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public string ModifiedOn { get; set; }
        public Nullable<bool> AccountExpired { get; set; }
        public Nullable<bool> AccountLocked { get; set; }
        public string ActivaitonCode { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string Description { get; set; }
        public Nullable<int> LocationId { get; set; }
    }
}
