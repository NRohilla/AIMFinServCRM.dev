using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class AdvisorTypeDetails
    {
        public int AutoID { get; set; }
        public System.Guid AdvisorID { get; set; }
        public string AdvisorCode { get; set; }
        public string Name { get; set; }
        public string AdvisorGroup { get; set; }
        public string FirmName { get; set; }
        public string Addressline1 { get; set; }
        public string Addressline2 { get; set; }
        public string Addressline3 { get; set; }
        public string PhoneNo { get; set; }
        public string MobileNo { get; set; }
        public string FaxNo { get; set; }
        public string EmailID { get; set; }
        public bool IsActive { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

    }
}
