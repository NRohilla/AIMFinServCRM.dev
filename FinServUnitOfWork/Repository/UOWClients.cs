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
        public Applicants GetClientDetails(string ClientID)
        {
            try
            {
                Applicants objApplicants = new Applicants();
                Guid ApplicantID = Guid.Parse(ClientID);
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantDetails = db.tblApplicants.Where(p => p.IsActive == true && p.ApplicantID == ApplicantID).FirstOrDefault();
                    if (GetApplicantDetails != null)
                    {
                        objApplicants.ApplicantID = GetApplicantDetails.ApplicantID;
                        objApplicants.ApplicantTypeID = GetApplicantDetails.ApplicantTypeID;
                        objApplicants.AutoID = GetApplicantDetails.AutoID;
                        objApplicants.CountryOfBirth = GetApplicantDetails.CountryOfBirth;
                        objApplicants.DateOfBirth = GetApplicantDetails.DateOfBirth;
                        objApplicants.EmailID = GetApplicantDetails.EmailID;
                        objApplicants.FirstName = GetApplicantDetails.FirstName;
                        objApplicants.Gender = GetApplicantDetails.Gender;
                        objApplicants.HomePhoneNo = GetApplicantDetails.HomePhoneNo;
                        objApplicants.IsActive = GetApplicantDetails.IsActive;
                        objApplicants.LastName = GetApplicantDetails.LastName;
                        objApplicants.MaritalStatus = GetApplicantDetails.MaritalStatus;
                        objApplicants.MiddleName = GetApplicantDetails.MiddleName;
                        objApplicants.MobileNo = GetApplicantDetails.MobileNo;
                        objApplicants.NoOfDependents = GetApplicantDetails.NoOfDependents;
                        objApplicants.NZResidents = GetApplicantDetails.NZResidents;
                        objApplicants.WorkPhoneNo = GetApplicantDetails.WorkPhoneNo;

                        objApplicants.ApplicantType = new ApplicantType();
                        objApplicants.ApplicantType.ApplicantTypeDesc = GetApplicantDetails.tblApplicantType.ApplicantType;

                        objApplicants.ApplicantEmployementDetails = new List<ApplicantEmployementDetails>();
                        foreach (var itemEmployementDetail in GetApplicantDetails.tblApplicantEmploymentDetails)
                        {
                            objApplicants.ApplicantEmployementDetails.Add(new ApplicantEmployementDetails
                            {
                                ApplicantID = itemEmployementDetail.ApplicantID,
                                AutoID = itemEmployementDetail.AutoID,
                                EmployerName = itemEmployementDetail.EmployerName,
                                Income = itemEmployementDetail.Income,
                                SourceOfIncome = itemEmployementDetail.SourceOfIncome,
                                EmploymentID = itemEmployementDetail.EmploymentID,
                                Status = itemEmployementDetail.Status,
                            });
                        }

                        objApplicants.ApplicantCommunicationDetails = new List<ApplicantCommunicationDetails>();
                        foreach (var itemApplicantCommDetails in GetApplicantDetails.tblApplicantCommunicationDetails)
                        {
                            objApplicants.ApplicantCommunicationDetails.Add(new ApplicantCommunicationDetails
                            {
                                AddressLine1 = itemApplicantCommDetails.AddressLine1,
                                AddressLine2 = itemApplicantCommDetails.AddressLine2,
                                AddressLine3 = itemApplicantCommDetails.AddressLine3,
                                AutoID = itemApplicantCommDetails.AutoID,
                                CommunicationID = itemApplicantCommDetails.CommunicationID,
                                Status = itemApplicantCommDetails.Status,
                            });
                        }
                    }
                    return objApplicants;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public List<ApplicantCommunicationDetails> GetClientCommincationDetails(string ClientID)
        {
            try
            {
                List<ApplicantCommunicationDetails> objApplicantCommunicationDetails = new List<ApplicantCommunicationDetails>();
                Guid ApplicantID = Guid.Parse(ClientID);
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantCommunicationDetails = db.tblApplicantCommunicationDetails.Where(p => p.ApplicantID == ApplicantID).ToList();
                    if (GetApplicantCommunicationDetails != null)
                    {
                        foreach (var itemApplicantCommDetails in GetApplicantCommunicationDetails)
                        {
                            objApplicantCommunicationDetails.Add(new ApplicantCommunicationDetails
                            {
                                AddressLine1 = itemApplicantCommDetails.AddressLine1,
                                AddressLine2 = itemApplicantCommDetails.AddressLine2,
                                AddressLine3 = itemApplicantCommDetails.AddressLine3,
                                AutoID = itemApplicantCommDetails.AutoID,
                                CommunicationID = itemApplicantCommDetails.CommunicationID,
                                Status = itemApplicantCommDetails.Status,
                            });
                        }
                    }
                    return objApplicantCommunicationDetails;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public List<ApplicantEmployementDetails> GetClientEmployementDetails(string ClientID)
        {
            try
            {
                List<ApplicantEmployementDetails> objApplicantEmployementDetails = new List<ApplicantEmployementDetails>();
                Guid ApplicantID = Guid.Parse(ClientID);
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantEmployementDetails = db.tblApplicantEmploymentDetails.Where(p => p.ApplicantID == ApplicantID).ToList();
                    if (GetApplicantEmployementDetails != null)
                    {
                        foreach (var itemEmployementDetail in GetApplicantEmployementDetails)
                        {
                            objApplicantEmployementDetails.Add(new ApplicantEmployementDetails
                            {
                                ApplicantID = itemEmployementDetail.ApplicantID,
                                AutoID = itemEmployementDetail.AutoID,
                                EmployerName = itemEmployementDetail.EmployerName,
                                Income = itemEmployementDetail.Income,
                                SourceOfIncome = itemEmployementDetail.SourceOfIncome,
                                EmploymentID = itemEmployementDetail.EmploymentID,
                                Status = itemEmployementDetail.Status,
                            });
                        }
                    }
                    return objApplicantEmployementDetails;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}