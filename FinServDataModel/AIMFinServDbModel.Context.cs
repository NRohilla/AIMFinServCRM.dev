﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class AIMFinServDBEntities : DbContext
    {
        public AIMFinServDBEntities()
            : base("name=AIMFinServDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<tblAdvisorDetail> tblAdvisorDetails { get; set; }
        public virtual DbSet<tblApplicantCommunicationDetail> tblApplicantCommunicationDetails { get; set; }
        public virtual DbSet<tblApplicantEmploymentDetail> tblApplicantEmploymentDetails { get; set; }
        public virtual DbSet<tblApplicantExpenseSheet> tblApplicantExpenseSheets { get; set; }
        public virtual DbSet<tblApplicantQualificationDetail> tblApplicantQualificationDetails { get; set; }
        public virtual DbSet<tblApplicant> tblApplicants { get; set; }
        public virtual DbSet<tblAsset> tblAssets { get; set; }
        public virtual DbSet<tblLiability> tblLiabilities { get; set; }
        public virtual DbSet<tblLoanApplicationForm> tblLoanApplicationForms { get; set; }
        public virtual DbSet<tblLoanMaster> tblLoanMasters { get; set; }
        public virtual DbSet<tblMasterAddressType> tblMasterAddressTypes { get; set; }
        public virtual DbSet<tblMasterApplicantType> tblMasterApplicantTypes { get; set; }
        public virtual DbSet<tblMasterAssetType> tblMasterAssetTypes { get; set; }
        public virtual DbSet<tblMasterExpenseType> tblMasterExpenseTypes { get; set; }
        public virtual DbSet<tblMasterLiabilityType> tblMasterLiabilityTypes { get; set; }
        public virtual DbSet<tblMasterLoanRateType> tblMasterLoanRateTypes { get; set; }
        public virtual DbSet<tblMasterPropertyType> tblMasterPropertyTypes { get; set; }
        public virtual DbSet<tblMasterPurposeOfLoan> tblMasterPurposeOfLoans { get; set; }
        public virtual DbSet<tblMasterSalutation> tblMasterSalutations { get; set; }
        public virtual DbSet<tblMasterTypeOfEmployment> tblMasterTypeOfEmployments { get; set; }
        public virtual DbSet<tblMasterTypeOfLoan> tblMasterTypeOfLoans { get; set; }
        public virtual DbSet<tblMasterTypeOfProfession> tblMasterTypeOfProfessions { get; set; }
        public virtual DbSet<tblMasterTypeOfQualification> tblMasterTypeOfQualifications { get; set; }
        public virtual DbSet<tblMasterTypeOfRelationship> tblMasterTypeOfRelationships { get; set; }
        public virtual DbSet<tblMasterTypeOfStatu> tblMasterTypeOfStatus { get; set; }
        public virtual DbSet<tblRole> tblRoles { get; set; }
        public virtual DbSet<tblUser> tblUsers { get; set; }
        public virtual DbSet<tblUsersRole> tblUsersRoles { get; set; }
        public virtual DbSet<tblLoanGuarantor> tblLoanGuarantors { get; set; }
    }
}
