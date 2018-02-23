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
        [Route("GetEmploymentTypes")]
        public List<EmploymentTypeMaster> GetEmploymentTypes()
        {
            return Repository.GetEmploymentTypes();
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
        [Route("GetProfessionTypes")]
        public List<ProfessionTypeMaster> GetProfessionTypes()
        {
            return Repository.GetProfessionTypes();
        }

        [HttpGet]
        [Route("SwitchEmploymentEntityStatus")]
        public bool SwitchEmploymentEntityStatus(string ID)
        {
            return Repository.SwitchEmploymentEntityStatus(Convert.ToInt32(ID));
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
        [Route("SwitchProfessionEntityStatus")]
        public bool SwitchProfessionEntityStatus(string ID)
        {
            return Repository.SwitchProfessionEntityStatus(Convert.ToInt32(ID));
        }
    }
}
