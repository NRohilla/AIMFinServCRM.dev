
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class ApplicantCommunicationDetails
    {
        public long AutoID { get; set; }
        public System.Guid CommunicationID { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string Duration { get; set; }
        public string Status { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public System.Guid ApplicantID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Type { get; set; }
        public int ID { get; set; }        
        public Applicants _ApplicantDetail { get; set; }
        public int AddressType { get; set; }
        public AddressTypeMaster _AddressTypeDetail { get; set; }
    }
}
