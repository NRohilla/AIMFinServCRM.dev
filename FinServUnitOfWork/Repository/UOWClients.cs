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
                            PurposeOfLoanID = itemGetAllApplications.PurposeOfLoanID,
                            StatusID = itemGetAllApplications.StatusID,
                            _RateTypeID = new LoanRateTypeMaster()
                            {
                                LoanRateType = itemGetAllApplications.tblMasterLoanRateType.LoanRateType
                            },
                            _PropertyTypeID = new PropertyTypeMaster()
                            {
                                PropertyType = itemGetAllApplications.tblMasterPropertyType.PropertyType
                            },
                            _TypeOfLoanID = new LoanTypeMaster()
                            {

                                LoanType = itemGetAllApplications.tblMasterTypeOfLoan.LoanType
                            },
                            _StatusID = new StatusTypeMaster()
                            {

                                Status = itemGetAllApplications.tblMasterTypeOfStatu.Status
                            },
                            _PurposeOfLoanID = new PurposeOfLoanMaster()
                            {

                                PurposeOfLoan = itemGetAllApplications.tblMasterPurposeOfLoan.PurposeOfLoan
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
                        objApplicants.Title = GetApplicantDetails.Title;
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
                        objtoReturn._PropertyTypeID = new PropertyTypeMaster();
                        objtoReturn._PropertyTypeID.ID = GetLoanAppDetails.tblMasterPropertyType.ID;
                        objtoReturn._PropertyTypeID.PropertyType = GetLoanAppDetails.tblMasterPropertyType.PropertyType;
                        objtoReturn._RateTypeID = new LoanRateTypeMaster();
                        objtoReturn._RateTypeID.ID = GetLoanAppDetails.tblMasterTypeOfStatu.ID;
                        objtoReturn._RateTypeID.LoanRateType = GetLoanAppDetails.tblMasterLoanRateType.LoanRateType;
                        objtoReturn._StatusID = new StatusTypeMaster();
                        objtoReturn._StatusID.ID = GetLoanAppDetails.tblMasterTypeOfStatu.ID;
                        objtoReturn._StatusID.Status = GetLoanAppDetails.tblMasterTypeOfStatu.Status;
                        objtoReturn._TypeOfLoanID = new LoanTypeMaster();
                        objtoReturn._TypeOfLoanID.LoanType = GetLoanAppDetails.tblMasterTypeOfLoan.LoanType;
                        objtoReturn._TypeOfLoanID.ID = GetLoanAppDetails.tblMasterTypeOfLoan.ID;
                        objtoReturn._PurposeOfLoanID = new PurposeOfLoanMaster();
                        objtoReturn._PurposeOfLoanID.ID = GetLoanAppDetails.tblMasterPurposeOfLoan.ID;
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



        
        #region Employment_Detail Methods   //Deepak Saini [16-03-2018]
        public List<ApplicantEmploymentDetails> GetClientEmploymentDetails(string ClientID)
        {
            try
            {
                List<ApplicantEmploymentDetails> objApplicantEmploymentDetails = new List<ApplicantEmploymentDetails>();
                Guid ApplicantID = Guid.Parse(ClientID);
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetApplicantEmploymentDetails = db.tblApplicantEmploymentDetails.Where(p => p.ApplicantID == ApplicantID).ToList();
                    if (GetApplicantEmploymentDetails != null)
                    {
                        foreach (var itemEmploymentDetail in GetApplicantEmploymentDetails)
                        {
                            objApplicantEmploymentDetails.Add(new ApplicantEmploymentDetails
                            {
                                ApplicantID = itemEmploymentDetail.ApplicantID,
                                AutoID = itemEmploymentDetail.AutoID,
                                EmploymentID = itemEmploymentDetail.EmploymentID,
                                EmployerName = itemEmploymentDetail.EmployerName,
                                Income = itemEmploymentDetail.Income,
                                SourceOfIncome =Convert.ToInt32(itemEmploymentDetail.SourceOfIncome),
                                Status = itemEmploymentDetail.Status,
                            });
                        }
                    }
                    return objApplicantEmploymentDetails;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public bool SaveClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objEmploymentDetails != null)
                    {
                        tblApplicantEmploymentDetail _objDetails = new tblApplicantEmploymentDetail();
                        _objDetails.EmploymentID = Guid.NewGuid();
                        _objDetails.ApplicantID = _objEmploymentDetails.ApplicantID;
                        _objDetails.SourceOfIncome = Convert.ToInt32(_objEmploymentDetails.SourceOfIncome);
                        _objDetails.EmployerName = _objEmploymentDetails.EmployerName;
                        _objDetails.Duration = _objEmploymentDetails.Duration;
                        _objDetails.Income = _objEmploymentDetails.Income;
                        _objDetails.Status = _objEmploymentDetails.Status;
                        db.tblApplicantEmploymentDetails.Add(_objDetails);
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
        public bool UpdateClientEmploymentDetails(ApplicantEmploymentDetails _objEmploymentDetails)
        {
            
            int TotalRecordsUpdated = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchObj = db.tblApplicantEmploymentDetails.Where(p => p.AutoID == _objEmploymentDetails.AutoID &&
                     p.EmploymentID == _objEmploymentDetails.EmploymentID).FirstOrDefault();
                    if (fetchObj != null)
                    {
                        fetchObj.SourceOfIncome =Convert.ToInt32(_objEmploymentDetails.SourceOfIncome);
                        fetchObj.EmployerName = _objEmploymentDetails.EmployerName;
                        fetchObj.Duration = _objEmploymentDetails.Duration;
                        fetchObj.Income = _objEmploymentDetails.Income;
                        fetchObj.Status = _objEmploymentDetails.Status;
                        TotalRecordsUpdated += db.SaveChanges();
                        
                    }
                    return true;
                }                
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        #endregion

        #region Qualification_Detail Methods   //Deepak Saini [16-03-2018]
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

        public bool SaveClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails)
        {

            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objQualificationDetails != null)
                    {
                        tblApplicantQualificationDetail _objDetails = new tblApplicantQualificationDetail();
                        _objDetails.QualificationID = Guid.NewGuid();
                        _objDetails.ApplicantID = _objQualificationDetails.ApplicantID;
                        _objDetails.CourseName = _objQualificationDetails.CourseName;
                        _objDetails.PassingYear = _objQualificationDetails.PassingYear;
                        _objDetails.UniversityName = _objQualificationDetails.UniversityName;
                        _objDetails.TypeOfQualification = _objQualificationDetails.TypeOfQualification;
                        db.tblApplicantQualificationDetails.Add(_objDetails);
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

        public bool UpdateClientQualificationDetails(ApplicantQualificationDetails _objQualificationDetails)
        {
            int TotalRecordsUpdated = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchObj = db.tblApplicantQualificationDetails.Where(p => p.AutoID == _objQualificationDetails.AutoID &&
                    p.QualificationID == _objQualificationDetails.QualificationID).FirstOrDefault();
                    if (fetchObj != null)
                    {
                        fetchObj.CourseName = _objQualificationDetails.CourseName;
                        fetchObj.PassingYear = _objQualificationDetails.PassingYear;
                        fetchObj.UniversityName = _objQualificationDetails.UniversityName;
                        fetchObj.TypeOfQualification = _objQualificationDetails.TypeOfQualification;
                        TotalRecordsUpdated += db.SaveChanges();
                        return true;
                    }
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        #endregion

        #region Communication_Detail Methods   //Deepak Saini [16-03-2018]
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
                                AutoID = itemApplicantCommDetails.AutoID,
                                AddressLine1 = itemApplicantCommDetails.AddressLine1,
                                AddressLine2 = itemApplicantCommDetails.AddressLine2,
                                AddressLine3 = itemApplicantCommDetails.AddressLine3,
                                CommunicationID = itemApplicantCommDetails.CommunicationID,
                                Status = itemApplicantCommDetails.Status,
                                Country=itemApplicantCommDetails.Country,
                                ZipCode=itemApplicantCommDetails.ZipCode,
                                AddressType = itemApplicantCommDetails.AddressType,
                                _AddressTypeDetail = new AddressTypeMaster()
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
        public bool SaveClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails)
        {
            
            try
            {                
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objApplicantCommDetails != null)
                    {
                        tblApplicantCommunicationDetail _objAppCommDetails = new tblApplicantCommunicationDetail();
                        _objAppCommDetails.CommunicationID = Guid.NewGuid();
                        _objAppCommDetails.ApplicantID = _objApplicantCommDetails.ApplicantID;
                        _objAppCommDetails.AddressLine1 = _objApplicantCommDetails.AddressLine1;
                        _objAppCommDetails.AddressLine2 = _objApplicantCommDetails.AddressLine2;
                        _objAppCommDetails.AddressLine3 = _objApplicantCommDetails.AddressLine3;
                        _objAppCommDetails.AddressType = _objApplicantCommDetails.AddressType;
                        _objAppCommDetails.Country = _objApplicantCommDetails.Country;
                        _objAppCommDetails.ZipCode = _objApplicantCommDetails.ZipCode;
                        db.tblApplicantCommunicationDetails.Add(_objAppCommDetails);
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
        public bool UpdateClientCommunicationDetails(ApplicantCommunicationDetails _objApplicantCommDetails)
        {
            int TotalRecordsUpdated = 0;
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchDetailsOfEmployment = db.tblApplicantCommunicationDetails.Where(p => p.AutoID == _objApplicantCommDetails.AutoID &&
                    p.CommunicationID == _objApplicantCommDetails.CommunicationID).FirstOrDefault();
                    if (FetchDetailsOfEmployment != null)
                    {
                        FetchDetailsOfEmployment.AddressLine1 = _objApplicantCommDetails.AddressLine1;
                        FetchDetailsOfEmployment.AddressLine2 = _objApplicantCommDetails.AddressLine2;
                        FetchDetailsOfEmployment.AddressLine3 = _objApplicantCommDetails.AddressLine3;
                        FetchDetailsOfEmployment.Country = _objApplicantCommDetails.Country;
                        FetchDetailsOfEmployment.ZipCode = _objApplicantCommDetails.ZipCode;
                        FetchDetailsOfEmployment.AddressType = Convert.ToInt32(_objApplicantCommDetails.AddressType);
                        TotalRecordsUpdated += db.SaveChanges();
                        return true;
                    }
                }
                return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
        #endregion

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
                        FetchApplicantPersonalDetails.Title = ApplicantPersonalDetails.Title;
                        FetchApplicantPersonalDetails.FirstName = ApplicantPersonalDetails.FirstName;
                        FetchApplicantPersonalDetails.MiddleName = ApplicantPersonalDetails.MiddleName;
                        FetchApplicantPersonalDetails.LastName = ApplicantPersonalDetails.LastName;
                        FetchApplicantPersonalDetails.Gender = ApplicantPersonalDetails.Gender;
                        FetchApplicantPersonalDetails.MaritalStatus = ApplicantPersonalDetails.MaritalStatus;
                        FetchApplicantPersonalDetails.DateOfBirth = ApplicantPersonalDetails.DateOfBirth;
                        FetchApplicantPersonalDetails.NoOfDependents = ApplicantPersonalDetails.NoOfDependents;
                        FetchApplicantPersonalDetails.NZResidents = ApplicantPersonalDetails.NZResidents;
                        FetchApplicantPersonalDetails.CountryOfBirth = ApplicantPersonalDetails.CountryOfBirth;
                        FetchApplicantPersonalDetails.HomePhoneNo = ApplicantPersonalDetails.HomePhoneNo;
                        FetchApplicantPersonalDetails.MobileNo = ApplicantPersonalDetails.MobileNo;
                        FetchApplicantPersonalDetails.WorkPhoneNo = ApplicantPersonalDetails.WorkPhoneNo;
                        FetchApplicantPersonalDetails.EmailID = ApplicantPersonalDetails.EmailID;
                        //FetchApplicantPersonalDetails.Gender = ApplicantPersonalDetails.Gender;

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
                        _tblApplicant.LoanApplicationNo = ApplicantPersonalDetails.LoanApplicationNo;
                        _tblApplicant.ApplicantTypeID = ApplicantPersonalDetails.ApplicantTypeID;
                        _tblApplicant.IsActive = true;
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
                        tblApplicantQualificationDetail _tblApplicantQualificationDetails = new tblApplicantQualificationDetail();
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
        public bool SaveLoanApplicationEmploymentDetails(ApplicantEmploymentDetails ApplicantEmploymentDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (ApplicantEmploymentDetails != null)
                    {
                        tblApplicantEmploymentDetail _tblApplicantEmploymentDetail = new tblApplicantEmploymentDetail();
                        _tblApplicantEmploymentDetail.ApplicantID = ApplicantEmploymentDetails.ApplicantID;
                        _tblApplicantEmploymentDetail.EmploymentID = Guid.NewGuid();
                        _tblApplicantEmploymentDetail.SourceOfIncome = ApplicantEmploymentDetails.SourceOfIncome;
                        _tblApplicantEmploymentDetail.EmployerName = ApplicantEmploymentDetails.EmployerName;
                        _tblApplicantEmploymentDetail.Duration = ApplicantEmploymentDetails.Duration;
                        _tblApplicantEmploymentDetail.Income = ApplicantEmploymentDetails.Income;
                        _tblApplicantEmploymentDetail.Status = ApplicantEmploymentDetails.Status;

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
        public bool AddGuarantor(LoanGuarantorDetails _objGuarantorDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objGuarantorDetails != null)
                    {
                        tblLoanGuarantor _tblLoanGuarantorDetail = new tblLoanGuarantor();
                        _tblLoanGuarantorDetail.GuarantorID = Guid.NewGuid();
                        _tblLoanGuarantorDetail.LoanApplicationNo = _objGuarantorDetails.LoanApplicationNo;
                        _tblLoanGuarantorDetail.FirstName = _objGuarantorDetails.FirstName;
                        _tblLoanGuarantorDetail.MiddleName = _objGuarantorDetails.MiddleName;
                        _tblLoanGuarantorDetail.LastName = _objGuarantorDetails.LastName;
                        _tblLoanGuarantorDetail.Gender = _objGuarantorDetails.Gender;
                        _tblLoanGuarantorDetail.DateOfBirth = _objGuarantorDetails.DateOfBirth;
                        _tblLoanGuarantorDetail.MaritalStatus = _objGuarantorDetails.MaritalStatus;
                        _tblLoanGuarantorDetail.MobileNo = _objGuarantorDetails.MobileNo;
                        _tblLoanGuarantorDetail.HomePhoneNo = _objGuarantorDetails.HomePhoneNo;
                        _tblLoanGuarantorDetail.WorkPhoneNo = _objGuarantorDetails.WorkPhoneNo;
                        _tblLoanGuarantorDetail.EmailID = _objGuarantorDetails.EmailID;
                        _tblLoanGuarantorDetail.NZResidents = _objGuarantorDetails.NZResidents;
                        _tblLoanGuarantorDetail.Duration = _objGuarantorDetails.Duration;
                        _tblLoanGuarantorDetail.CountryOfBirth = _objGuarantorDetails.CountryOfBirth;
                        _tblLoanGuarantorDetail.AddressLine1 = _objGuarantorDetails.AddressLine1;
                        _tblLoanGuarantorDetail.AddressLine2 = _objGuarantorDetails.AddressLine2;
                        _tblLoanGuarantorDetail.AddressLine3 = _objGuarantorDetails.AddressLine3;
                        _tblLoanGuarantorDetail.Country = _objGuarantorDetails.Country;
                        _tblLoanGuarantorDetail.ZipCode = _objGuarantorDetails.ZipCode;

                        db.tblLoanGuarantors.Add(_tblLoanGuarantorDetail);
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

        public List<LoanGuarantorDetails> GetAddedGuarantorGrid()
        {
            List<LoanGuarantorDetails> objGuarantorDetails = new List<LoanGuarantorDetails>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllGuarantors = db.tblLoanGuarantors.ToList();

                    foreach (var itemGetAllGuarantors in GetAllGuarantors)
                    {
                        objGuarantorDetails.Add(new LoanGuarantorDetails
                        {
                            GuarantorID = itemGetAllGuarantors.GuarantorID,
                            FirstName = itemGetAllGuarantors.FirstName,
                            MiddleName = itemGetAllGuarantors.MiddleName,
                            LastName = itemGetAllGuarantors.LastName,
                            NZResidents = itemGetAllGuarantors.NZResidents,
                            MobileNo = itemGetAllGuarantors.MobileNo,
                            HomePhoneNo = itemGetAllGuarantors.HomePhoneNo,
                            EmailID = itemGetAllGuarantors.EmailID
                        });
                    }

                    return objGuarantorDetails;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public LoanGuarantorDetails GetGuarantorDetails(string GuarntID)
        {
            try
            {
                LoanGuarantorDetails objtoReturn = new LoanGuarantorDetails();
                Guid GuarantorID = Guid.Parse(GuarntID);

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetGuarantorDetails = db.tblLoanGuarantors.Where(p => p.GuarantorID == GuarantorID).FirstOrDefault();
                    if (GetGuarantorDetails != null)
                    {
                        objtoReturn.GuarantorID = GetGuarantorDetails.GuarantorID;
                        objtoReturn.FirstName = GetGuarantorDetails.FirstName;
                        objtoReturn.MiddleName = GetGuarantorDetails.MiddleName;
                        objtoReturn.LastName = GetGuarantorDetails.LastName;
                        objtoReturn.Gender = GetGuarantorDetails.Gender.Trim();
                        objtoReturn.DateOfBirth = GetGuarantorDetails.DateOfBirth;
                        objtoReturn.MaritalStatus = GetGuarantorDetails.MaritalStatus;
                        objtoReturn.MobileNo = GetGuarantorDetails.MobileNo;
                        objtoReturn.WorkPhoneNo = GetGuarantorDetails.WorkPhoneNo;
                        objtoReturn.HomePhoneNo = GetGuarantorDetails.HomePhoneNo;
                        objtoReturn.EmailID = GetGuarantorDetails.EmailID;
                        objtoReturn.NZResidents = GetGuarantorDetails.NZResidents;
                        objtoReturn.Duration = GetGuarantorDetails.Duration;
                        objtoReturn.CountryOfBirth = GetGuarantorDetails.CountryOfBirth;
                        objtoReturn.AddressLine1 = GetGuarantorDetails.AddressLine1;
                        objtoReturn.AddressLine2 = GetGuarantorDetails.AddressLine2;
                        objtoReturn.AddressLine3 = GetGuarantorDetails.AddressLine3;
                        objtoReturn.Country = GetGuarantorDetails.Country;
                        objtoReturn.ZipCode = GetGuarantorDetails.ZipCode;
                        objtoReturn._LoanApplicationFormDetails = new LoanApplicationForms();
                        objtoReturn._LoanApplicationFormDetails.LoanApplicationNo = GetGuarantorDetails.tblLoanApplicationForm.LoanApplicationNo;
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool UpdateGuarantorDetails(LoanGuarantorDetails _objUpdateGuartDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchGuarantorDetails = db.tblLoanGuarantors.Where(p => p.GuarantorID == _objUpdateGuartDetails.GuarantorID).FirstOrDefault();
                    if (FetchGuarantorDetails != null)
                    {
                        FetchGuarantorDetails.GuarantorID = _objUpdateGuartDetails.GuarantorID;
                        FetchGuarantorDetails.FirstName = _objUpdateGuartDetails.FirstName;
                        FetchGuarantorDetails.MiddleName = _objUpdateGuartDetails.MiddleName;
                        FetchGuarantorDetails.LastName = _objUpdateGuartDetails.LastName;
                        FetchGuarantorDetails.Gender = _objUpdateGuartDetails.Gender;
                        FetchGuarantorDetails.DateOfBirth = _objUpdateGuartDetails.DateOfBirth;
                        FetchGuarantorDetails.MaritalStatus = _objUpdateGuartDetails.MaritalStatus;
                        FetchGuarantorDetails.MobileNo = _objUpdateGuartDetails.MobileNo;
                        FetchGuarantorDetails.HomePhoneNo = _objUpdateGuartDetails.HomePhoneNo;
                        FetchGuarantorDetails.WorkPhoneNo = _objUpdateGuartDetails.WorkPhoneNo;
                        FetchGuarantorDetails.EmailID = _objUpdateGuartDetails.EmailID;
                        FetchGuarantorDetails.NZResidents = _objUpdateGuartDetails.NZResidents;
                        FetchGuarantorDetails.Duration = _objUpdateGuartDetails.Duration;
                        FetchGuarantorDetails.CountryOfBirth = _objUpdateGuartDetails.CountryOfBirth;
                        FetchGuarantorDetails.AddressLine1 = _objUpdateGuartDetails.AddressLine1;
                        FetchGuarantorDetails.AddressLine2 = _objUpdateGuartDetails.AddressLine2;
                        FetchGuarantorDetails.AddressLine3 = _objUpdateGuartDetails.AddressLine3;
                        FetchGuarantorDetails.Country = _objUpdateGuartDetails.Country;
                        FetchGuarantorDetails.ZipCode = _objUpdateGuartDetails.ZipCode;

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