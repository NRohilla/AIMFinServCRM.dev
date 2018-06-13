using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public int LoanTypeID { get; set; }
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

        public string ApplicationFormNumber { get; set; }
        public string LoanRateType { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public System.Guid ApplicantID{ get; set; }

        public string MobileNo { get; set; }
        public string EmailID { get; set; }
        public int ApplicantTypeID { get; set; }
        public string ApplicantType { get; set; }
        public string PropertyType { get; set; }
        public string Status { get; set; }
        public string LoanType { get; set; }

        public LoanApplicationForms _loanApplicationDetails { get; set; }
        public PropertyTypeMaster _propertyTypeDetails { get; set; }
        public LoanTypeMaster _typeOfLoanDetails { get; set; }
        public StatusTypeMaster _typeOfStatusDetails { get; set; }

    }
}
