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
        public List<Applicants> GetAllClients()
        {
            List<Applicants> objApplicants = new List<Applicants>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllApplicants = db.tblApplicants.Where(p => p.IsActive == true).ToList();

                    foreach (var itemGetAllApplicants in GetAllApplicants)
                    {
                        var ApplicantCommDetails = db.tblApplicantCommunicationDetails.Where(p => p.ApplicantID == itemGetAllApplicants.ApplicantID).FirstOrDefault();
                        objApplicants.Add(new Applicants
                        {
                            AutoID = itemGetAllApplicants.AutoID,
                            ApplicantID = itemGetAllApplicants.ApplicantID,
                            FirstName = itemGetAllApplicants.FirstName,
                            MiddleName = itemGetAllApplicants.MiddleName,
                            LastName = itemGetAllApplicants.LastName,
                            Gender = itemGetAllApplicants.Gender,
                            DateOfBirth = itemGetAllApplicants.DateOfBirth,
                            MaritalStatus = itemGetAllApplicants.MaritalStatus,
                            NoOfDependents = itemGetAllApplicants.NoOfDependents,
                            NZResidents = itemGetAllApplicants.NZResidents,
                            CountryOfBirth = itemGetAllApplicants.CountryOfBirth,
                            ApplicantTypeID = itemGetAllApplicants.ApplicantTypeID,
                            IsActive = itemGetAllApplicants.IsActive,
                            CreatedBy = itemGetAllApplicants.CreatedBy,
                            CreatedOn = itemGetAllApplicants.CreatedOn,
                            ModifiedBy = itemGetAllApplicants.ModifiedBy,
                            ModifiedOn = itemGetAllApplicants.ModifiedOn,
                            MobileNo = ApplicantCommDetails != null ? ApplicantCommDetails.MobileNo : "",
                            WorkPhoneNo = ApplicantCommDetails != null ? ApplicantCommDetails.WorkPhoneNo : "",
                            EmailID = ApplicantCommDetails != null ? ApplicantCommDetails.EmailID : "",
                            HomePhoneNo = ApplicantCommDetails != null ? ApplicantCommDetails.HomePhoneNo : "",
                            ApplicantType = new ApplicantType()
                            {
                                ApplicantTypeID = itemGetAllApplicants.tblApplicantType.ApplicantTypeID,
                                ApplicantTypeDesc = itemGetAllApplicants.tblApplicantType.ApplicantType
                            },
                        });
                    }

                    return objApplicants;
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
                        objApplicants.EmailID = GetApplicantDetails.tblApplicantCommunicationDetails.ToList()[0].EmailID;
                        objApplicants.FirstName = GetApplicantDetails.FirstName;
                        objApplicants.Gender = GetApplicantDetails.Gender;
                        objApplicants.HomePhoneNo = GetApplicantDetails.tblApplicantCommunicationDetails.ToList()[0].HomePhoneNo;
                        objApplicants.IsActive = GetApplicantDetails.IsActive;
                        objApplicants.LastName = GetApplicantDetails.LastName;
                        objApplicants.MaritalStatus = GetApplicantDetails.MaritalStatus;
                        objApplicants.MiddleName = GetApplicantDetails.MiddleName;
                        objApplicants.MobileNo = GetApplicantDetails.tblApplicantCommunicationDetails.ToList()[0].MobileNo;
                        objApplicants.NoOfDependents = GetApplicantDetails.NoOfDependents;
                        objApplicants.NZResidents = GetApplicantDetails.NZResidents;
                        objApplicants.WorkPhoneNo = GetApplicantDetails.tblApplicantCommunicationDetails.ToList()[0].WorkPhoneNo;

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
                                MobileNo = itemApplicantCommDetails.MobileNo,
                                WorkPhoneNo = itemApplicantCommDetails.WorkPhoneNo,
                                EmailID = itemApplicantCommDetails.EmailID,
                                HomePhoneNo = itemApplicantCommDetails.HomePhoneNo,
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
        public List<ApplicantCommunicationDetails> GetClientCommunicationDetails(string ClientID)
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
                                MobileNo = itemApplicantCommDetails.MobileNo,
                                WorkPhoneNo = itemApplicantCommDetails.WorkPhoneNo,
                                EmailID = itemApplicantCommDetails.EmailID,
                                HomePhoneNo = itemApplicantCommDetails.HomePhoneNo,
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
                                EmploymentID = itemEmployementDetail.EmploymentID,
                                EmployerName = itemEmployementDetail.EmployerName,
                                Income = itemEmployementDetail.Income,
                                SourceOfIncome = itemEmployementDetail.SourceOfIncome,
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
        public bool UpdateClientEmploymentDetails(List<ApplicantEmployementDetails> _ApplicantEmployementDetails)
        {
            int TotalRecords = _ApplicantEmployementDetails.Count();
            int TotalRecordsUpdated = 0;
            foreach (var item in _ApplicantEmployementDetails)
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchDetailsOfEmployement = db.tblApplicantEmploymentDetails.Where(p => p.AutoID == item.AutoID && p.EmploymentID == item.EmploymentID).FirstOrDefault();
                    if (FetchDetailsOfEmployement != null)
                    {
                        FetchDetailsOfEmployement.EmployerName = item.EmployerName;
                        FetchDetailsOfEmployement.SourceOfIncome = item.SourceOfIncome;
                        FetchDetailsOfEmployement.Income = item.Income;
                        TotalRecordsUpdated += db.SaveChanges();
                    }
                }
            }
            if (TotalRecords == TotalRecordsUpdated)
                return true;
            else
                return false;
        }

        public bool UpdateClientCommunicationDetails(List<ApplicantCommunicationDetails> ApplicantCommunicationDetails)
        {
            int TotalRecords = ApplicantCommunicationDetails.Count();
            int TotalRecordsUpdated = 0;
            foreach (var item in ApplicantCommunicationDetails)
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchDetailsOfEmployement = db.tblApplicantCommunicationDetails.Where(p => p.AutoID == item.AutoID && p.CommunicationID == item.CommunicationID).FirstOrDefault();
                    if (FetchDetailsOfEmployement != null)
                    {
                        FetchDetailsOfEmployement.AddressLine1 = item.AddressLine1;
                        FetchDetailsOfEmployement.AddressLine2 = item.AddressLine2;
                        FetchDetailsOfEmployement.AddressLine3 = item.AddressLine3;
                        TotalRecordsUpdated += db.SaveChanges();
                    }
                }
            }
            if (TotalRecords == TotalRecordsUpdated)
                return true;
            else
                return false;
        }
    }
}