using System;
using System.Collections.Generic;
using FinServBussinessEntities;

namespace FinServUnitOfWork.Interface
{
    public interface IMasters
    {
        //get
        List<ApplicantTypeMaster> GetApplicantTypes();
        List<AssetsTypeMaster> GetAssetsTypes();


        List<AdvisorTypeDetails> GetAdvisorGroups();

        List<EmploymentTypeMaster> GetEmploymentTypes();
        List<ExpenseTypeMaster> GetExpenseTypes();
        List<LiabilityTypeMaster> GetLiabilityTypes();
        List<LoanTypeMaster> GetLoanTypes();
        List<LoanRateTypeMaster> GetLoanrateTypes();
        List<ProfessionTypeMaster> GetProfessionTypes();
        List<PropertyTypeMaster> GetPropertyTypes();
        List<PurposeOfLoanMaster> GetPurposeofloanTypes();
        List<QualificationTypeMaster> GetQualificationTypes();
        List<RelationshipTypeMaster> GetRelationshipTypes();
        List<SalutationTypeMaster> GetSalutationTypes();
        List<LoanApplicationForms> GetApplicationFormNo();
        List<UserDetails> GetUpdatedPassword(Guid UserGuid);
        Applicants GetUserDetails(Guid ApplicantID);
        //Added by Neha
        List<StatusTypeMaster> GetStatusTypes();

        List<Applicants> GetApplicantNames(string loanappno);
        List<Applicants> GetApplicants();
        List<AddressTypeMaster> GetAddressTypes();
        List<UserDetails> GetAllUser();
        List<Role> GetRoleType();
        //switch status
        bool SwitchApplicantEntityStatus(int ID);
        bool SwitchAssetsEntityStatus(int ID);
        bool SwitchEmploymentEntityStatus(int ID);
        bool SwitchExpenseEntityStatus(int ID);
        bool SwitchLiabilityEntityStatus(int ID);
        bool SwitchLoanEntityStatus(int ID);
        bool SwitchLoanrateEntityStatus(int ID);
        bool SwitchProfessionEntityStatus(int ID);
        bool SwitchPropertyEntityStatus(int ID);
        bool SwitchPurposeofloanEntityStatus(int ID);
        bool SwitchQualificationEntityStatus(int ID);
        bool SwitchRelationshipEntityStatus(int ID);
        bool SwitchSalutationEntityStatus(int ID);
        bool SwitchManageUserEntityStatus(Guid UserGuid);
        bool vaildEmail(string Email);

        //update
        bool UpdateApplicantEntity(ApplicantTypeMaster ApplicantTypeMaster);
        bool UpdateAssetsEntity(AssetsTypeMaster AssetsTypeMaster);
        bool UpdateEmploymentEntity(EmploymentTypeMaster EmploymentTypeMaster);
        bool UpdateExpenseEntity(ExpenseTypeMaster ExpenseTypeMaster);
        bool UpdateLiabilityEntity(LiabilityTypeMaster LiabilityTypeMaster);
        bool UpdateLoanEntity(LoanTypeMaster LoanTypeMaster);
        bool UpdateLoanrateEntity(LoanRateTypeMaster LoanRateTypeMaster);
        bool UpdateProffessionEntity(ProfessionTypeMaster ProfessionTypeMaster);
        bool UpdatePropertyEntity(PropertyTypeMaster PropertyTypeMaster);
        bool UpdatePurposeofloanEntity(PurposeOfLoanMaster PurposeOfLoanMaster);
        bool UpdateQualificationEntity(QualificationTypeMaster QualificationTypeMaster);
        bool UpdateRelationshipEntity(RelationshipTypeMaster RelationshipTypeMaster);
        bool UpdateSalutationEntity(SalutationTypeMaster SalutationTypeMaster);
        bool UpdatePassword(UserDetails UserDetails);
        bool UpdateUserDetails(UserDetails UserDetails);


        //add
        bool AddApplicantEntity(ApplicantTypeMaster ApplicantTypeMaster);
        bool AddAssetsEntity(AssetsTypeMaster AssetsTypeMaster);
        bool AddEmploymentEntity(EmploymentTypeMaster EmploymentTypeMaster);
        bool AddExpenseEntity(ExpenseTypeMaster ExpenseTypeMaster);
        bool AddLiabilityEntity(LiabilityTypeMaster LiabilityTypeMaster);
        bool AddLoanEntity(LoanTypeMaster LoanTypeMaster);
        bool AddLoanrateEntity(LoanRateTypeMaster LoanRateTypeMaster);
        bool AddProffessionEntity(ProfessionTypeMaster ProfessionTypeMaster);
        bool AddPropertyEntity(PropertyTypeMaster PropertyTypeMaster);
        bool AddPurposeofloanEntity(PurposeOfLoanMaster PurposeOfLoanMaster);
        bool AddQualificationEntity(QualificationTypeMaster QualificationTypeMaster);
        bool AddRelationshipEntity(RelationshipTypeMaster RelationshipTypeMaster);
        bool AddSalutationEntity(SalutationTypeMaster SalutationTypeMaster);
        bool AddUser(UserDetails _objManageUser);

    }
}
