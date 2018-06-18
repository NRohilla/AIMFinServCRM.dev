using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class Applicants
    {
        public long AutoID { get; set; }
        public System.Guid ApplicantID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public string MaritalStatus { get; set; }
        public string NoOfDependents { get; set; }
        public Nullable<bool> NZResidents { get; set; }
        public string CountryOfBirth { get; set; }
        public int ApplicantTypeID { get; set; }
        public string EmailID { get; set; }
        public string MobileNo { get; set; }
        public string HomePhoneNo { get; set; }
        public string WorkPhoneNo { get; set; }
        public System.Guid LoanApplicationNo { get; set; }
        public byte[] ApplicantImage { get; set; }
        public string FileType { get; set; }
        public bool IsActive { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public string ApplicantType { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public string Type { get; set; }
        public Nullable<int> FileTypeID { get; set; }
        public string FileName { get; set; }
        public string Extension { get; set; }

        public int ID { get; set; }
        public ApplicantTypeMaster _ApplicantTypeMasterID { get; set; }
        public LoanApplicationForms _LoanApplicationNo { get; set; }
        public ApplicantCommunicationDetails _ApplicantComunctnDetails { get; set; }
        public FileTypeMaster _fileTypeMaster { get; set; }
    }
}
