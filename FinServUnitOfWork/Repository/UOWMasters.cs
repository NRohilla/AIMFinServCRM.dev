using System;
using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using System.Linq;
using FinServBussinessEntities;

namespace FinServUnitOfWork.Repository
{
    public class UOWMasters : IMasters
    {
        public List<EmploymentTypeMaster> GetEmploymentTypes()
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    return (from EmpMstr in db.tblMasterTypeOfEmployments
                            select new EmploymentTypeMaster()
                            {
                                EmployementType = EmpMstr.EmployementType,
                                ID = EmpMstr.ID,
                                IsActive = EmpMstr.IsActive
                            }).ToList();
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public List<QualificationTypeMaster> GetQualificationTypes()
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    return (from QualMstr in db.tblMasterTypeOfQualifications
                            select new QualificationTypeMaster()
                            {
                                Qualifications = QualMstr.Qualifications,
                                ID = QualMstr.ID,
                                IsActive = QualMstr.IsActive
                            }).ToList();
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public List<RelationshipTypeMaster> GetRelationshipTypes()
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    return (from RelMstr in db.tblMasterTypeOfRelationships
                            select new RelationshipTypeMaster()
                            {
                                RelationshipWithApplicant = RelMstr.RelationshipWithApplicant,
                                ID = RelMstr.ID,
                                IsActive = RelMstr.IsActive
                            }).ToList();
                }
            }
            catch (Exception e)
            {
                return null;
            }

        }
        public List<ProfessionTypeMaster> GetProfessionTypes()
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    return (from ProMstr in db.tblMasterTypeOfProfessions
                            select new ProfessionTypeMaster()
                            {
                                Profession = ProMstr.Profession,
                                ID = ProMstr.ID,
                                IsActive = ProMstr.IsActive
                            }).ToList();
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool SwitchEmploymentEntityStatus(int ID)
        {
            int operationResult = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetEmploymentEntity = db.tblMasterTypeOfEmployments.Where(p => p.ID == ID).FirstOrDefault();
                    if (GetEmploymentEntity != null)
                    {
                        GetEmploymentEntity.IsActive = !GetEmploymentEntity.IsActive;
                        operationResult = db.SaveChanges();
                    }
                }
                if (operationResult > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool SwitchQualificationEntityStatus(int ID) {
            int operationResult = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetQualificationEntity = db.tblMasterTypeOfQualifications.Where(p => p.ID == ID).FirstOrDefault();
                    if (GetQualificationEntity != null)
                    {
                        GetQualificationEntity.IsActive = !GetQualificationEntity.IsActive;
                        operationResult = db.SaveChanges();
                    }
                }
                if (operationResult > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool SwitchRelationshipEntityStatus(int ID) {
            int operationResult = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetRelationshipEntity = db.tblMasterTypeOfRelationships.Where(p => p.ID == ID).FirstOrDefault();
                    if (GetRelationshipEntity != null)
                    {
                        GetRelationshipEntity.IsActive = !GetRelationshipEntity.IsActive;
                        operationResult = db.SaveChanges();
                    }
                }
                if (operationResult > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool SwitchProfessionEntityStatus(int ID) {
            int operationResult = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetProfessionEntity = db.tblMasterTypeOfProfessions.Where(p => p.ID == ID).FirstOrDefault();
                    if (GetProfessionEntity != null)
                    {
                        GetProfessionEntity.IsActive = !GetProfessionEntity.IsActive;
                        operationResult = db.SaveChanges();
                    }
                }
                if (operationResult > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
