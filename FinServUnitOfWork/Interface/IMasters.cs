using System.Collections.Generic;
using FinServBussinessEntities;

namespace FinServUnitOfWork.Interface
{
    public interface IMasters
    {
        List<EmploymentTypeMaster> GetEmploymentTypes();
        List<QualificationTypeMaster> GetQualificationTypes();
        List<RelationshipTypeMaster> GetRelationshipTypes();
        List<ProfessionTypeMaster> GetProfessionTypes();

        bool SwitchEmploymentEntityStatus(int ID);
        bool SwitchQualificationEntityStatus(int ID);
        bool SwitchRelationshipEntityStatus(int ID);
        bool SwitchProfessionEntityStatus(int ID);

        bool UpdateEmploymentEntity(EmploymentTypeMaster EmploymentTypeMaster);
        bool UpdateQualificationEntity(QualificationTypeMaster QualificationTypeMaster);
        bool UpdateRelationshipEntity(RelationshipTypeMaster RelationshipTypeMaster);
        bool UpdateProffessionEntity(ProfessionTypeMaster ProfessionTypeMaster);
    }
}
