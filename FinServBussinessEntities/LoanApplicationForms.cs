using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class LoanApplicationForms
    {
        public long AutoID { get; set; }
        public System.Guid LoanApplicationNo { get; set; }
        public System.Guid ApplicantID { get; set; }
        public Nullable<bool> IsPreApproval { get; set; }
        public string TypeOfLoan { get; set; }
        public string Priority { get; set; }
        public string FinanceRequired { get; set; }
        public string CashInHand { get; set; }
        public string LoanTerm { get; set; }
        public string RateType { get; set; }
        public string Frequency { get; set; }
        public Nullable<bool> IsApplicationApproved { get; set; }
        public Nullable<System.DateTime> ApprovalExpiryDate { get; set; }
        public string ReasonForNotApproval { get; set; }
        public Nullable<bool> IsAnyGuarantor { get; set; }
        public string CostOfProperty { get; set; }
        public string PropertyType { get; set; }
        public Nullable<bool> IsShifted { get; set; }
        public string AgeOfProperty { get; set; }
        public string ShiftedDuration { get; set; }
        public string PropertyUsedFor { get; set; }
        public Nullable<bool> IsPropertyDecided { get; set; }
        public string Status { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public Applicants _Applicant { get; set; }
    }
}
