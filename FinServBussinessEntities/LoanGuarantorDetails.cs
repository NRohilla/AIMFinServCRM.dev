using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
  public  class LoanGuarantorDetails
    {
        public long AutoID { get; set; }
        public System.Guid GuarantorID { get; set; }
        public System.Guid LoanApplicationNo { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public string MaritalStatus { get; set; }
        public string MobileNo { get; set; }
        public string HomePhoneNo { get; set; }
        public string WorkPhoneNo { get; set; }
        public string EmailID { get; set; }
        public Nullable<bool> NZResidents { get; set; }
        public string Duration { get; set; }
        public string CountryOfBirth { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }

        public LoanApplicationForms _LoanApplicationFormDetails { get; set; }
    }
}
