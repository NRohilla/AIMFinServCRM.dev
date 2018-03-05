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
                            MobileNo = itemGetAllApplicants.MobileNo,
                            WorkPhoneNo = itemGetAllApplicants.WorkPhoneNo,
                            EmailID = itemGetAllApplicants.EmailID,
                            HomePhoneNo = itemGetAllApplicants.HomePhoneNo,
                            ApplicantType = new ApplicantTypeMaster()
                            {
                                ApplicantTypeID = itemGetAllApplicants.tblMasterApplicantType.ApplicantTypeID,
                                ApplicantType = itemGetAllApplicants.tblMasterApplicantType.ApplicantType
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
                        objApplicants.EmailID = GetApplicantDetails.EmailID;
                        objApplicants.FirstName = GetApplicantDetails.FirstName;
                        objApplicants.MiddleName = GetApplicantDetails.MiddleName;
                        objApplicants.LastName = GetApplicantDetails.LastName;
                        objApplicants.Gender = GetApplicantDetails.Gender;
                        objApplicants.HomePhoneNo = GetApplicantDetails.HomePhoneNo;
                        objApplicants.IsActive = GetApplicantDetails.IsActive;
                        objApplicants.MaritalStatus = GetApplicantDetails.MaritalStatus;
                        objApplicants.MobileNo = GetApplicantDetails.MobileNo;
                        objApplicants.NoOfDependents = GetApplicantDetails.NoOfDependents;
                        objApplicants.NZResidents = GetApplicantDetails.NZResidents;
                        objApplicants.WorkPhoneNo = GetApplicantDetails.WorkPhoneNo;

                        objApplicants.ApplicantType = new ApplicantTypeMaster();
                        objApplicants.ApplicantType.ApplicantType = GetApplicantDetails.tblMasterApplicantType.ApplicantType;
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
        public bool UpdateClientPersonalDetails(Applicants ApplicantPersonalDetails)
        {
            int RecordUpdate = 0;
            try
            {

                Guid ApplicantID = ApplicantPersonalDetails.ApplicantID;
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchApplicantPersonalDetails = db.tblApplicants.Where(p => p.ApplicantID == ApplicantID).FirstOrDefault();
                    if (FetchApplicantPersonalDetails != null)
                    {
                        FetchApplicantPersonalDetails.FirstName = ApplicantPersonalDetails.FirstName;
                        FetchApplicantPersonalDetails.MiddleName = ApplicantPersonalDetails.MiddleName;
                        FetchApplicantPersonalDetails.LastName = ApplicantPersonalDetails.LastName;
                        FetchApplicantPersonalDetails.MaritalStatus = ApplicantPersonalDetails.MaritalStatus;
                        FetchApplicantPersonalDetails.DateOfBirth = ApplicantPersonalDetails.DateOfBirth;
                        FetchApplicantPersonalDetails.NoOfDependents = ApplicantPersonalDetails.NoOfDependents;
                        RecordUpdate = db.SaveChanges();
                        return true;
                    }
                }
            }
            catch (Exception e)
            { }
            return false;
        }
    }
}