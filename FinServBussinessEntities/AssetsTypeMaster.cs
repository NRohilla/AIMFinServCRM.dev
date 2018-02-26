using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class AssetsTypeMaster
    {
        public int AutoID { get; set; }
        public System.Guid AssetTypeID { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}
