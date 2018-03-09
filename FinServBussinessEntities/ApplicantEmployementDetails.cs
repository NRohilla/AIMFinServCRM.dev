using FinServDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class ApplicantEmployementDetails
    {
        public long AutoID { get; set; }
        public System.Guid EmploymentID { get; set; }
        public System.Guid ApplicantID { get; set; }
        public string SourceOfIncome { get; set; }
        public string EmployerName { get; set; }
        public string Duration { get; set; }
        public string Income { get; set; }
        public string Status { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public virtual tblApplicant tblApplicant { get; set; }
    }
}
