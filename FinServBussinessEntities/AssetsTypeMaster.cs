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
        public string AssetType { get; set; }
        public bool IsActive { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> Createdon { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }


        public Asset _AssetDetails { get; set; }

    }
}
