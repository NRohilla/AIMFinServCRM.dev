using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
   public class UserRole
    {
        public System.Guid UsersRoleGuid { get; set; }
        public int RoleId { get; set; }
        public Nullable<System.Guid> RoleGuid { get; set; }
        public Nullable<System.Guid> UserGuid { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
