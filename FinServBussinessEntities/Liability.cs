
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class Liability
    {
        public long AutoID { get; set; }
        public System.Guid LiabilityID { get; set; }
        public System.Guid LiabilityTypeID { get; set; }
        public string Description { get; set; }
        public Nullable<decimal> NetValue { get; set; }
        public string Ownership { get; set; }
        public System.Guid ApplicantID { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public string FirstName { get; set; }
        public string LiabilityType { get; set; }

        public Applicants _ApplicationID { get; set; }
        public LiabilityTypeMaster _LiabilityID { get; set; }
    }
}
