using FinServBussinessEntities;
using System.Collections.Generic;
using System.Web.Http;
using FinServUnitOfWork.Interface;
using FinServUnitOfWork.Repository;
using System;
namespace FinServServices.Controllers
{
    [RoutePrefix("API/Masters")]
    public class MastersController : ApiController
    {
        IMasters Repository = new UOWMasters();

        [HttpGet]
        [Route("GetApplicantTypes")]
        public List<ApplicantTypeMaster> GetApplicantTypes()
        {
            return Repository.GetApplicantTypes();
        }

        [HttpGet]
        [Route("GetAssetsTypes")]
        public List<AssetsTypeMaster> GetAssetsTypes()
        {
            return Repository.GetAssetsTypes();
        }

        [HttpGet]
        [Route("GetEmploymentTypes")]
        public List<EmploymentTypeMaster> GetEmploymentTypes()
        {
            return Repository.GetEmploymentTypes();
        }

        [HttpGet]
        [Route("GetExpenseTypes")]
        public List<ExpenseTypeMaster> GetExpenseTypes()
        {
            return Repository.GetExpenseTypes();
        }

        [HttpGet]
        [Route("GetLiabilityTypes")]
        public List<LiabilityTypeMaster> GetLiabilityTypes()
        {
            return Repository.GetLiabilityTypes();
        }

        [HttpGet]
        [Route("GetLoanTypes")]
        public List<LoanTypeMaster> GetLoanTypes()
        {
            return Repository.GetLoanTypes();
        }

        [HttpGet]
        [Route("GetLoanrateTypes")]
        public List<LoanRateTypeMaster> GetLoanrateTypes()
        {
            return Repository.GetLoanrateTypes();
        }

        [HttpGet]
        [Route("GetProfessionTypes")]
        public List<ProfessionTypeMaster> GetProfessionTypes()
        {
            return Repository.GetProfessionTypes();
        }

        [HttpGet]
        [Route("GetPropertyTypes")]
        public List<PropertyTypeMaster> GetPropertyTypes()
        {
            return Repository.GetPropertyTypes();
        }

        [HttpGet]
        [Route("GetPurposeofloanTypes")]
        public List<PurposeOfLoanMaster> GetPurposeofloanTypes()
        {
            return Repository.GetPurposeofloanTypes();
        }

        [HttpGet]
        [Route("GetQualificationTypes")]
        public List<QualificationTypeMaster> GetQualificationTypes()
        {
            return Repository.GetQualificationTypes();
        }

        [HttpGet]
        [Route("GetRelationshipTypes")]
        public List<RelationshipTypeMaster> GetRelationshipTypes()
        {
            return Repository.GetRelationshipTypes();
        }

        [HttpGet]
        [Route("GetSalutationTypes")]
        public List<SalutationTypeMaster> GetSalutationTypes()
        {
            return Repository.GetSalutationTypes();
        }






        [HttpGet]
        [Route("SwitchApplicantEntityStatus")]
        public bool SwitchApplicantEntityStatus(int ID)
        {
            return Repository.SwitchApplicantEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchAssetsEntityStatus")]
        public bool SwitchAssetsEntityStatus(int ID)
        {
            return Repository.SwitchAssetsEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchEmploymentEntityStatus")]
        public bool SwitchEmploymentEntityStatus(string ID)
        {
            return Repository.SwitchEmploymentEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchExpenseEntityStatus")]
        public bool SwitchExpenseEntityStatus(int ID)
        {
            return Repository.SwitchExpenseEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchLiabilityEntityStatus")]
        public bool SwitchLiabilityEntityStatus(int ID)
        {
            return Repository.SwitchLiabilityEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchLoanEntityStatus")]
        public bool SwitchLoanEntityStatus(int ID)
        {
            return Repository.SwitchLoanEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchLoanrateEntityStatus")]
        public bool SwitchLoanrateEntityStatus(int ID)
        {
            return Repository.SwitchLoanrateEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchProfessionEntityStatus")]
        public bool SwitchProfessionEntityStatus(string ID)
        {
            return Repository.SwitchProfessionEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchPropertyEntityStatus")]
        public bool SwitchPropertyEntityStatus(int ID)
        {
            return Repository.SwitchPropertyEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchPurposeofloanEntityStatus")]
        public bool SwitchPurposeofloanEntityStatus(int ID)
        {
            return Repository.SwitchPurposeofloanEntityStatus(Convert.ToInt32(ID));
        }


        [HttpGet]
        [Route("SwitchQualificationEntityStatus")]
        public bool SwitchQualificationEntityStatus(string ID)
        {
            return Repository.SwitchQualificationEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchRelationshipEntityStatus")]
        public bool SwitchRelationshipEntityStatus(string ID)
        {
            return Repository.SwitchRelationshipEntityStatus(Convert.ToInt32(ID));
        }

        [HttpGet]
        [Route("SwitchSalutationEntityStatus")]
        public bool SwitchSalutationEntityStatus(int ID)
        {
            return Repository.SwitchSalutationEntityStatus(Convert.ToInt32(ID));
        }





        [HttpPost]
        [Route("UpdateApplicantEntity")]
        public bool UpdateApplicantEntity(ApplicantTypeMaster ApplicantTypeMaster)
        {
            return Repository.UpdateApplicantEntity(ApplicantTypeMaster);
        }

        [HttpPost]
        [Route("UpdateAssetsEntity")]
        public bool UpdateAssetsEntity(AssetsTypeMaster AssetsTypeMaster)
        {
            return Repository.UpdateAssetsEntity(AssetsTypeMaster);
        }

        [HttpPost]
        [Route("UpdateEmploymentEntity")]
        public bool UpdateEmploymentEntity(EmploymentTypeMaster EmploymentTypeMaster)
        {
            return Repository.UpdateEmploymentEntity(EmploymentTypeMaster);
        }

        [HttpPost]
        [Route("UpdateExpenseEntity")]
        public bool UpdateExpenseEntity(ExpenseTypeMaster ExpenseTypeMaster)
        {
            return Repository.UpdateExpenseEntity(ExpenseTypeMaster);
        }

        [HttpPost]
        [Route("UpdateLiabilityEntity")]
        public bool UpdateLiabilityEntity(LiabilityTypeMaster LiabilityTypeMaster)
        {
            return Repository.UpdateLiabilityEntity(LiabilityTypeMaster);
        }

        [HttpPost]
        [Route("UpdateLoanEntity")]
        public bool UpdateLoanEntity(LoanTypeMaster LoanTypeMaster)
        {
            return Repository.UpdateLoanEntity(LoanTypeMaster);
        }

        [HttpPost]
        [Route("UpdateLoanrateEntity")]
        public bool UpdateLoanrateEntity(LoanRateTypeMaster LoanRateTypeMaster)
        {
            return Repository.UpdateLoanrateEntity(LoanRateTypeMaster);
        }

        [HttpPost]
        [Route("UpdateProffessionEntity")]
        public bool UpdateProffessionEntity(ProfessionTypeMaster ProfessionTypeMaster)
        {
            return Repository.UpdateProffessionEntity(ProfessionTypeMaster);
        }

        [HttpPost]
        [Route("UpdatePropertyEntity")]
        public bool UpdatePropertyEntity(PropertyTypeMaster PropertyTypeMaster)
        {
            return Repository.UpdatePropertyEntity(PropertyTypeMaster);
        }

        [HttpPost]
        [Route("UpdatePurposeofloanEntity")]
        public bool UpdatePurposeofloanEntity(PurposeOfLoanMaster PurposeOfLoanMaster)
        {
            return Repository.UpdatePurposeofloanEntity(PurposeOfLoanMaster);
        }

        [HttpPost]
        [Route("UpdateQualificationEntity")]
        public bool UpdateQualificationEntity(QualificationTypeMaster QualificationTypeMaster)
        {
            return Repository.UpdateQualificationEntity(QualificationTypeMaster);
        }

        [HttpPost]
        [Route("UpdateRelationshipEntity")]
        public bool UpdateRelationshipEntity(RelationshipTypeMaster RelationshipTypeMaster)
        {
            return Repository.UpdateRelationshipEntity(RelationshipTypeMaster);
        }

        [HttpPost]
        [Route("UpdateSalutationEntity")]
        public bool UpdateSalutationEntity(SalutationTypeMaster SalutationTypeMaster)
        {
            return Repository.UpdateSalutationEntity(SalutationTypeMaster);
        }
    }
}
