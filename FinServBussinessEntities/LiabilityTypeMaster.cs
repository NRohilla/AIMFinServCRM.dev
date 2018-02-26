using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class LiabilityTypeMaster
    {
        public int AutoID { get; set; }
        public System.Guid LiabilityTypeID { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
