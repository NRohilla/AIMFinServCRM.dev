using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
  public class LoanMasterDetails
    {
        public long AutoID { get; set; }
        public System.Guid LANNumber { get; set; }
        public System.Guid LoanApplicationNo { get; set; }
        public string ROIOffered { get; set; }
        public string LoanTermOffered { get; set; }
        public string RateTypeOffered { get; set; }
        public string FrequencyOffered { get; set; }
        public string LoanValueRatio { get; set; }
        public string LoanAmountOffered { get; set; }
        public Nullable<int> LoanTypeID { get; set; }
        public string ClientID { get; set; }
        public int StatusID { get; set; }
        public string EMIStartDay { get; set; }
        public string EMIStartMonth { get; set; }
        public string LoanProcessingFee { get; set; }
        public string AnyLegalCharges { get; set; }
        public string NoOfEMI { get; set; }
        public string Loanprovider { get; set; }
        public string PropertyCost { get; set; }
        public int PropertyTypeID { get; set; }
        public Nullable<System.DateTime> FinanceDate { get; set; }
        public Nullable<System.DateTime> SettlementDate { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public LoanApplicationForms _loanApplicationDetails { get; set; }
        public PropertyTypeMaster _propertyTypeDetails { get; set; }
        public LoanTypeMaster _typeOfLoanDetails { get; set; }
        public StatusTypeMaster _typeOfStatusDetails { get; set; }

    }
}
