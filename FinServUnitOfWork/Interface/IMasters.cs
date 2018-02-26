using System.Collections.Generic;
using FinServBussinessEntities;

namespace FinServUnitOfWork.Interface
{
    public interface IMasters
    {
        //get
        List<ApplicantTypeMaster> GetApplicantTypes();
        List<AssetsTypeMaster> GetAssetsTypes();
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

    }
}
