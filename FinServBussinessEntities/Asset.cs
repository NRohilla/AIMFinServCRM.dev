using FinServDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class Asset
    {
        public long AutoID { get; set; }
        public System.Guid AssetID { get; set; }
        public System.Guid AssetTypeID { get; set; }
        public string Description { get; set; }
        public Nullable<decimal> NetValue { get; set; }
        public string Ownership { get; set; }
        public string AssetType {get; set;}

        public string FirstName { get; set; }
        public System.Guid ApplicantID { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public Applicants _ApplicationID { get; set; }
        public AssetsTypeMaster _AssetTypeID { get; set; }
    }
}
