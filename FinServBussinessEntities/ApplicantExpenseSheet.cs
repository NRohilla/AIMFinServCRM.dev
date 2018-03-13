using FinServDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
  public  class ApplicantExpenseSheet
    {
        public long AutoID { get; set; }
        public System.Guid ExpenseID { get; set; }
        public System.Guid ExpenseTypeID { get; set; }
        public System.Guid ApplicantID { get; set; }
        public string Description { get; set; }
        public string Frequency { get; set; }
        public Nullable<decimal> NetAmount { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public Applicants _ApplicationID { get; set; }
        public ExpenseTypeMaster _ExpenseTypeID { get; set;  }
    }
}
