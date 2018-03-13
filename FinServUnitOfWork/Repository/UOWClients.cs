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
                            _ApplicantTypeMasterID = new ApplicantTypeMaster()
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
        public List<LoanApplicationForms> GetAllLoanApplications()
        {
            List<LoanApplicationForms> objLoanApplicationForms = new List<LoanApplicationForms>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllApplicants = db.tblLoanApplicationForms.ToList();

                    foreach (var itemGetAllApplications in GetAllApplicants)
                    {
                        objLoanApplicationForms.Add(new LoanApplicationForms
                        {
                            LoanApplicationNo = itemGetAllApplications.LoanApplicationNo,
                            TypeOfLoanID = itemGetAllApplications.TypeOfLoanID,
                            LoanTerm = itemGetAllApplications.LoanTerm,
                            RateTypeID = itemGetAllApplications.RateTypeID,
                            PropertyTypeID = itemGetAllApplications.PropertyTypeID,
                            PurposeOfLoanID=itemGetAllApplications.PurposeOfLoanID,
                            StatusID = itemGetAllApplications.StatusID,
                            _RateTypeID = new LoanRateTypeMaster()
                            {
                                LoanRateType = itemGetAllApplications.tblMasterLoanRateType.LoanRateType
                            },
                            _PropertyTypeID = new PropertyTypeMaster()
                            {
                                PropertyType = itemGetAllApplications.tblMasterPropertyType.PropertyType
                            },
                            _TypeOfLoanID = new LoanTypeMaster() {

                                LoanType=itemGetAllApplications.tblMasterTypeOfLoan.LoanType
                            },
                            _StatusID =new StatusTypeMaster() {

                                Status=itemGetAllApplications.tblMasterTypeOfStatu.Status
                            },
                           _PurposeOfLoanID = new PurposeOfLoanMaster() {

                               PurposeOfLoan=itemGetAllApplications.tblMasterPurposeOfLoan.PurposeOfLoan
                           }

                        });
                    }

                    return objLoanApplicationForms;
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

                        objApplicants._ApplicantTypeMasterID = new ApplicantTypeMaster();
                        objApplicants._ApplicantTypeMasterID.ApplicantType = GetApplicantDetails.tblMasterApplicantType.ApplicantType;
                    }
                    return objApplicants;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public LoanApplicationForms GetLoanApplicationDetails(string LoanAppNo)
        {
            try
            {
                LoanApplicationForms objtoReturn = new LoanApplicationForms();
                Guid LoanApplicationNo = Guid.Parse(LoanAppNo);

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetLoanAppDetails = db.tblLoanApplicationForms.Where(p => p.LoanApplicationNo == LoanApplicationNo).FirstOrDefault();
                    if (GetLoanAppDetails != null)
                    {
                        objtoReturn.AgeOfProperty = GetLoanAppDetails.AgeOfProperty;
                        objtoReturn.LoanApplicationNo = GetLoanAppDetails.LoanApplicationNo;
                        objtoReturn.PurposeOfLoanID = GetLoanAppDetails.PurposeOfLoanID;
                        objtoReturn.ApprovalExpiryDate = GetLoanAppDetails.ApprovalExpiryDate;
                        objtoReturn.AutoID = GetLoanAppDetails.AutoID;
                        objtoReturn.CashInHand = GetLoanAppDetails.CashInHand;
                        objtoReturn.CostOfProperty = GetLoanAppDetails.CostOfProperty;
                        objtoReturn.CreatedBy = GetLoanAppDetails.CreatedBy;
                        objtoReturn.CreatedOn = GetLoanAppDetails.CreatedOn;
                        objtoReturn.FinanceRequired = GetLoanAppDetails.FinanceRequired;
                        objtoReturn.Frequency = GetLoanAppDetails.Frequency;
                        objtoReturn.IsAnyGuarantor = GetLoanAppDetails.IsAnyGuarantor;
                        objtoReturn.IsApplicationApproved = GetLoanAppDetails.IsApplicationApproved;
                        objtoReturn.IsPreApproval = GetLoanAppDetails.IsPreApproval;
                        objtoReturn.IsPropertyDecided = GetLoanAppDetails.IsPropertyDecided;
                        objtoReturn.IsShifted = GetLoanAppDetails.IsShifted;
                        objtoReturn.LoanApplicationNo = GetLoanAppDetails.LoanApplicationNo;
                        objtoReturn.LoanTerm = GetLoanAppDetails.LoanTerm;
                        objtoReturn.ModifiedBy = GetLoanAppDetails.ModifiedBy;
                        objtoReturn.ModifiedOn = GetLoanAppDetails.ModifiedOn;
                        objtoReturn.Priority = GetLoanAppDetails.Priority;
                        objtoReturn.PropertyTypeID = GetLoanAppDetails.PropertyTypeID;
                        objtoReturn.PropertyUsedFor = GetLoanAppDetails.PropertyUsedFor;
                        objtoReturn.RateTypeID = GetLoanAppDetails.RateTypeID;
                        objtoReturn.ReasonForNotApproval = GetLoanAppDetails.ReasonForNotApproval;
                        objtoReturn.ShiftedDuration = GetLoanAppDetails.ShiftedDuration;
                        objtoReturn.StatusID = GetLoanAppDetails.StatusID;
                        objtoReturn.TypeOfLoanID = GetLoanAppDetails.TypeOfLoanID;
                        objtoReturn._ApplicantID = GetClientDetails(Convert.ToString(GetLoanAppDetails.ApplicantID));
                        objtoReturn._PropertyTypeID = new PropertyTypeMaster();
                        objtoReturn._PropertyTypeID.PropertyType = GetLoanAppDetails.tblMasterPropertyType.PropertyType;
                        objtoReturn._RateTypeID = new LoanRateTypeMaster();
                        objtoReturn._RateTypeID.LoanRateType = GetLoanAppDetails.tblMasterLoanRateType.LoanRateType;
                        objtoReturn._StatusID = new StatusTypeMaster();
                        objtoReturn._StatusID.Status = GetLoanAppDetails.tblMasterTypeOfStatu.Status;
                        objtoReturn._TypeOfLoanID = new LoanTypeMaster();
                        objtoReturn._TypeOfLoanID.LoanType = GetLoanAppDetails.tblMasterTypeOfLoan.LoanType;
                        objtoReturn._PurposeOfLoanID = new PurposeOfLoanMaster();
                        objtoReturn._PurposeOfLoanID.PurposeOfLoan = GetLoanAppDetails.tblMasterPurposeOfLoan.PurposeOfLoan;
                    }
                    return objtoReturn;
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
                            var addresstype = db.tblMasterAddressTypes.Where(p => p.ID == itemApplicantCommDetails.AddressType).FirstOrDefault();
                            objApplicantCommunicationDetails.Add(new ApplicantCommunicationDetails
                            {
                                AddressLine1 = itemApplicantCommDetails.AddressLine1,
                                AddressLine2 = itemApplicantCommDetails.AddressLine2,
                                AddressLine3 = itemApplicantCommDetails.AddressLine3,
                                AutoID = itemApplicantCommDetails.AutoID,
                                CommunicationID = itemApplicantCommDetails.CommunicationID,
                                Status = itemApplicantCommDetails.Status,
                                AddressType = itemApplicantCommDetails.AddressType,
                                _MasterTypeID = new AddressTypeMaster()
                                {
                                    Type = addresstype != null ? itemApplicantCommDetails.tblMasterAddressType.Type : ""
                                }
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
        public List<ApplicantQualificationDetails> GetClientQualificationDetails(string ClientID)
        {
            try
            {
                List<ApplicantQualificationDetails> objApplicantQualificationDetails = new List<ApplicantQualificationDetails>();
                Guid ApplicantID = Guid.Parse(ClientID);
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantQualificationDetails = db.tblApplicantQualificationDetails.Where(p => p.ApplicantID == ApplicantID).ToList();
                    if (GetApplicantQualificationDetails != null)
                    {
                        foreach (var itemQualificationDetail in GetApplicantQualificationDetails)
                        {
                            objApplicantQualificationDetails.Add(new ApplicantQualificationDetails
                            {
                                ApplicantID = itemQualificationDetail.ApplicantID,
                                AutoID = itemQualificationDetail.AutoID,
                                CourseName = itemQualificationDetail.CourseName,
                                PassingYear = itemQualificationDetail.PassingYear,
                                QualificationID = itemQualificationDetail.QualificationID,
                                TypeOfQualification = itemQualificationDetail.TypeOfQualification,
                                UniversityName = itemQualificationDetail.UniversityName,
                                _MasterTypeQualificationID = new QualificationTypeMaster()
                                {
                                    Qualifications = itemQualificationDetail.tblMasterTypeOfQualification.Qualifications
                                }
                            });
                        }
                    }
                    return objApplicantQualificationDetails;
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
        public bool UpdateLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails)
        {
            try
            {
                int TotalRecordsUpdated = 0;
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchLoanApplicationDetails = db.tblLoanApplicationForms.Where(p => p.LoanApplicationNo == LoanApplicationDetails.LoanApplicationNo).FirstOrDefault();
                    if (FetchLoanApplicationDetails != null)
                    {
                        FetchLoanApplicationDetails.AgeOfProperty = LoanApplicationDetails.AgeOfProperty;
                        FetchLoanApplicationDetails.LoanApplicationNo = LoanApplicationDetails.LoanApplicationNo;
                        FetchLoanApplicationDetails.ApprovalExpiryDate = LoanApplicationDetails.ApprovalExpiryDate;
                        FetchLoanApplicationDetails.CashInHand = LoanApplicationDetails.CashInHand;
                        FetchLoanApplicationDetails.CostOfProperty = LoanApplicationDetails.CostOfProperty;
                        FetchLoanApplicationDetails.FinanceRequired = LoanApplicationDetails.FinanceRequired;
                        FetchLoanApplicationDetails.Frequency = LoanApplicationDetails.Frequency;
                        FetchLoanApplicationDetails.IsAnyGuarantor = LoanApplicationDetails.IsAnyGuarantor;
                        FetchLoanApplicationDetails.IsApplicationApproved = LoanApplicationDetails.IsApplicationApproved;
                        FetchLoanApplicationDetails.IsPreApproval = LoanApplicationDetails.IsPreApproval;
                        FetchLoanApplicationDetails.IsPropertyDecided = LoanApplicationDetails.IsPropertyDecided;
                        FetchLoanApplicationDetails.IsShifted = LoanApplicationDetails.IsShifted;
                        FetchLoanApplicationDetails.LoanTerm = LoanApplicationDetails.LoanTerm;
                        FetchLoanApplicationDetails.Priority = LoanApplicationDetails.Priority;
                        FetchLoanApplicationDetails.PropertyTypeID = LoanApplicationDetails.PropertyTypeID;
                        FetchLoanApplicationDetails.PropertyUsedFor = LoanApplicationDetails.PropertyUsedFor;
                        FetchLoanApplicationDetails.RateTypeID = LoanApplicationDetails.RateTypeID;
                        FetchLoanApplicationDetails.ReasonForNotApproval = LoanApplicationDetails.ReasonForNotApproval;
                        FetchLoanApplicationDetails.ShiftedDuration = LoanApplicationDetails.ShiftedDuration;
                        FetchLoanApplicationDetails.StatusID = LoanApplicationDetails.StatusID;
                        FetchLoanApplicationDetails.TypeOfLoanID = LoanApplicationDetails.TypeOfLoanID;
                        TotalRecordsUpdated += db.SaveChanges();
                        return true;
                    }
                }

                if (TotalRecordsUpdated > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public string SaveLoanApplicationPersonalDetails(Applicants ApplicantPersonalDetails)
        {
            try
            {
                tblApplicant _tblApplicant = new tblApplicant();
             
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (ApplicantPersonalDetails != null)
                    {
                        _tblApplicant.ApplicantID = Guid.NewGuid();
                        _tblApplicant.FirstName = ApplicantPersonalDetails.FirstName;
                        _tblApplicant.MiddleName = ApplicantPersonalDetails.MiddleName;
                        _tblApplicant.LastName = ApplicantPersonalDetails.LastName;
                        _tblApplicant.Gender = ApplicantPersonalDetails.Gender;
                        _tblApplicant.DateOfBirth = ApplicantPersonalDetails.DateOfBirth;
                        _tblApplicant.MaritalStatus = ApplicantPersonalDetails.MaritalStatus;
                        _tblApplicant.NoOfDependents = ApplicantPersonalDetails.NoOfDependents;
                        _tblApplicant.NZResidents = ApplicantPersonalDetails.NZResidents;
                        _tblApplicant.CountryOfBirth = ApplicantPersonalDetails.CountryOfBirth;
                        _tblApplicant.EmailID = ApplicantPersonalDetails.EmailID;
                        _tblApplicant.MobileNo = ApplicantPersonalDetails.MobileNo;
                        _tblApplicant.EmailID = ApplicantPersonalDetails.EmailID;
                        _tblApplicant.HomePhoneNo = ApplicantPersonalDetails.HomePhoneNo;
                        _tblApplicant.WorkPhoneNo = ApplicantPersonalDetails.WorkPhoneNo;
                        _tblApplicant.LoanApplicationNo= ApplicantPersonalDetails.LoanApplicationNo;
                        _tblApplicant.ApplicantTypeID = ApplicantPersonalDetails.ApplicantTypeID;

                        db.tblApplicants.Add(_tblApplicant);
                        db.SaveChanges();
                       
                       return _tblApplicant.ApplicantID.ToString();
                    }
                    return "";
                }
            }
            catch (Exception ex)
            {
                return "";
            }
        }
        public bool SaveLoanApplicationQualificationDetails(ApplicantQualificationDetails ApplicantQualificationDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (ApplicantQualificationDetails != null)
                    {
                       tblApplicantQualificationDetail _tblApplicantQualificationDetails =new tblApplicantQualificationDetail();
                        _tblApplicantQualificationDetails.QualificationID = Guid.NewGuid();
                        _tblApplicantQualificationDetails.ApplicantID = ApplicantQualificationDetails.ApplicantID;
                        _tblApplicantQualificationDetails.PassingYear = ApplicantQualificationDetails.PassingYear;
                        _tblApplicantQualificationDetails.CourseName = ApplicantQualificationDetails.CourseName;
                        _tblApplicantQualificationDetails.UniversityName = ApplicantQualificationDetails.UniversityName;
                        _tblApplicantQualificationDetails.TypeOfQualification = ApplicantQualificationDetails.TypeOfQualification;

                        db.tblApplicantQualificationDetails.Add(_tblApplicantQualificationDetails);
                        db.SaveChanges();
                    }
                    return true;
                }

            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool SaveLoanApplicationEmployementDetails(ApplicantEmployementDetails ApplicantEmployementDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (ApplicantEmployementDetails != null)
                    {
                        tblApplicantEmploymentDetail _tblApplicantEmploymentDetail = new tblApplicantEmploymentDetail();
                        _tblApplicantEmploymentDetail.ApplicantID = ApplicantEmployementDetails.ApplicantID;
                        _tblApplicantEmploymentDetail.EmploymentID = Guid.NewGuid();
                        _tblApplicantEmploymentDetail.SourceOfIncome = ApplicantEmployementDetails.SourceOfIncome;
                        _tblApplicantEmploymentDetail.EmployerName = ApplicantEmployementDetails.EmployerName;
                        _tblApplicantEmploymentDetail.Duration = ApplicantEmployementDetails.Duration;
                        _tblApplicantEmploymentDetail.Income = ApplicantEmployementDetails.Income;
                        _tblApplicantEmploymentDetail.Status = ApplicantEmployementDetails.Status;

                        db.tblApplicantEmploymentDetails.Add(_tblApplicantEmploymentDetail);
                        db.SaveChanges();
                      
                    }
                    return true;
                }

                
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool SaveLoanApplicationCommunicationDetails(ApplicantCommunicationDetails ApplicantCommunicationDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (ApplicantCommunicationDetails != null)
                    {
                        tblApplicantCommunicationDetail _tblApplicantCommunicationDetail = new tblApplicantCommunicationDetail();
                        _tblApplicantCommunicationDetail.CommunicationID = Guid.NewGuid();
                        _tblApplicantCommunicationDetail.AddressLine1 = ApplicantCommunicationDetails.AddressLine1;
                        _tblApplicantCommunicationDetail.AddressLine2 = ApplicantCommunicationDetails.AddressLine2;
                        _tblApplicantCommunicationDetail.AddressLine3 = ApplicantCommunicationDetails.AddressLine3;
                        _tblApplicantCommunicationDetail.Duration = ApplicantCommunicationDetails.Duration;
                        _tblApplicantCommunicationDetail.ApplicantID = ApplicantCommunicationDetails.ApplicantID;
                        _tblApplicantCommunicationDetail.AddressType = ApplicantCommunicationDetails.AddressType;

                        db.tblApplicantCommunicationDetails.Add(_tblApplicantCommunicationDetail);
                        db.SaveChanges();
                   
                    }
                    return true;
                }

            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }

}