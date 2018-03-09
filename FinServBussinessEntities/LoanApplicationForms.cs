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
        public string ApplicationFormNumber { get; set; }
        public Nullable<bool> IsPreApproval { get; set; }
        public int TypeOfLoanID { get; set; }
        public int PurposeOfLoanID { get; set; }
        public string Priority { get; set; }
        public string FinanceRequired { get; set; }
        public string CashInHand { get; set; }
        public string LoanTerm { get; set; }
        public int RateTypeID { get; set; }
        public string Frequency { get; set; }
        public Nullable<bool> IsApplicationApproved { get; set; }
        public Nullable<System.DateTime> ApprovalExpiryDate { get; set; }
        public string ReasonForNotApproval { get; set; }
        public Nullable<bool> IsAnyGuarantor { get; set; }
        public string CostOfProperty { get; set; }
        public int PropertyTypeID { get; set; }
        public Nullable<bool> IsShifted { get; set; }
        public string AgeOfProperty { get; set; }
        public string ShiftedDuration { get; set; }
        public string PropertyUsedFor { get; set; }
        public Nullable<bool> IsPropertyDecided { get; set; }
        public System.Guid AdvisorID { get; set; }
        public Nullable<System.DateTime> FinanceDate { get; set; }
        public int StatusID { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public LoanTypeMaster _TypeOfLoanID { get; set; }
        public PurposeOfLoanMaster _PurposeOfLoanID { get; set; }
        public LoanRateTypeMaster _RateTypeID { get; set; }
        public PropertyTypeMaster _PropertyTypeID { get; set; }
        public StatusTypeMaster _StatusID { get; set; }
        public AdvisorTypeDetails _AdvisorID { get; set; }

    }
}
