//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinServDataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblMasterTypeOfProfession
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tblMasterTypeOfProfession()
        {
            this.tblApplicantEmploymentDetails = new HashSet<tblApplicantEmploymentDetail>();
        }
    
        public int ID { get; set; }
        public string Profession { get; set; }
        public bool IsActive { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.Guid> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblApplicantEmploymentDetail> tblApplicantEmploymentDetails { get; set; }
    }
}
