using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServBussinessEntities;
using FinServDataModel;
using System.Linq;
using System;

namespace FinServUnitOfWork.Repository
{
    public class UOWClients : IClients
    {
        public IEnumerable<Applicants> GetAllClients()
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllApplicants = db.tblApplicants.Where(p => p.IsActive == true)
                        .Select(x => new Applicants()
                        {
                            AutoID = x.AutoID,
                            ApplicantID = x.ApplicantID,
                            FirstName = x.FirstName,
                            MiddleName = x.MiddleName,
                            LastName = x.LastName,
                            Gender = x.Gender,
                            DateOfBirth = x.DateOfBirth,
                            MaritalStatus = x.MaritalStatus,
                            NoOfDependents = x.NoOfDependents,
                            NZResidents = x.NZResidents,
                            CountryOfBirth = x.CountryOfBirth,
                            MobileNo = x.MobileNo,
                            HomePhoneNo = x.HomePhoneNo,
                            WorkPhoneNo = x.WorkPhoneNo,
                            EmailID = x.EmailID,
                            ApplicantTypeID = x.ApplicantTypeID,
                            IsActive = x.IsActive,
                            CreatedBy = x.CreatedBy,
                            CreatedOn = x.CreatedOn,
                            ModifiedBy = x.ModifiedBy,
                            ModifiedOn = x.ModifiedOn,
                            ApplicantType = new ApplicantType()
                            {
                                ApplicantTypeID = x.tblApplicantType.ApplicantTypeID,
                                ApplicantTypeDesc = x.tblApplicantType.ApplicantType
                            },
                        }).ToList();
                    return GetAllApplicants;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}