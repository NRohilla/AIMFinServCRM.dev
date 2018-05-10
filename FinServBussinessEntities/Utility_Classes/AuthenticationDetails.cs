using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities.Utility_Classes
{
   public class AuthenticationDetails
    {
        public string _RoleDesc { get; set; }
        public string _UserID { get; set; }
        public string _ApplicantID { get; set; }
        public bool _IsAuthenticated { get; set; }
        public string ActivaitonCode { get; set; }

        public Nullable<bool> IsLoggedIn { get; set; }
    }
}
