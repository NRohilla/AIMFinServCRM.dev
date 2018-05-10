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
        #region AIM FinServ Application Code
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
        public Applicants GetApplicantDetails(int AutoId)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    Applicants objapp = new Applicants();
                    var dataofapplicants = db.tblApplicants.Where(x => x.AutoID == AutoId).FirstOrDefault();
                    if(dataofapplicants!=null)
                    {
                        objapp.AutoID = dataofapplicants.AutoID;
                        objapp.ApplicantID = dataofapplicants.ApplicantID;
                        objapp.Title = dataofapplicants.Title;
                        objapp.FirstName = dataofapplicants.FirstName;
                        objapp.MiddleName = dataofapplicants.MiddleName;
                        objapp.LastName = dataofapplicants.LastName;
                        objapp.NZResidents = dataofapplicants.NZResidents;
                        objapp.CountryOfBirth = dataofapplicants.CountryOfBirth;
                        objapp.EmailID = dataofapplicants.EmailID;
                        objapp.MobileNo = dataofapplicants.MobileNo;
                        objapp.HomePhoneNo = dataofapplicants.HomePhoneNo;
                        objapp.WorkPhoneNo = dataofapplicants.WorkPhoneNo;
                        objapp.LoanApplicationNo = dataofapplicants.LoanApplicationNo;

                    }
                   
                    return objapp;
                }
            }

            catch (Exception ex)
            {
                return null;
            }
        }
        public List<Applicants> GetAllApplicantsByLoanID(Guid loanID)
        {
            List<Applicants> objApplicants = new List<Applicants>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllApplicants = db.tblApplicants.Where(p => p.LoanApplicationNo == loanID).ToList();
                    foreach (var itemGetAllApplicants in GetAllApplicants)
                    {
                        objApplicants.Add(new Applicants
                        {
                            AutoID = itemGetAllApplicants.AutoID,
                            ApplicantID = itemGetAllApplicants.ApplicantID,
                            ApplicantTypeID=itemGetAllApplicants.ApplicantTypeID,
                            FirstName = itemGetAllApplicants.FirstName,
                            MiddleName = itemGetAllApplicants.MiddleName,
                            LastName = itemGetAllApplicants.LastName,
                            Gender = itemGetAllApplicants.Gender,
                            DateOfBirth = itemGetAllApplicants.DateOfBirth,
                            NZResidents = itemGetAllApplicants.NZResidents,
                            CountryOfBirth = itemGetAllApplicants.CountryOfBirth,
                            MobileNo = itemGetAllApplicants.MobileNo,
                            WorkPhoneNo = itemGetAllApplicants.WorkPhoneNo,
                            EmailID = itemGetAllApplicants.EmailID,
                            HomePhoneNo = itemGetAllApplicants.HomePhoneNo,
                            ApplicantType = itemGetAllApplicants.tblMasterApplicantType.ApplicantType
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
                            ApplicationFormNumber=itemGetAllApplications.ApplicationFormNumber,
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
        public Applicants GetClientDetails(Guid ApplicantID)
        {
            try
            {
                Applicants objApplicants = new Applicants();
                //Guid ApplicantID = Guid.Parse(ClientID);
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
                        objApplicants.ApplicantImage = GetApplicantDetails.ApplicantImage;
                        objApplicants.FileTypeID = GetApplicantDetails.FileTypeID;
                        objApplicants.FileType = GetApplicantDetails.tblMasterFileType.FileType;
                        objApplicants.FileName = GetApplicantDetails.FileName;
                        objApplicants.Extension = GetApplicantDetails.tblMasterFileType.Extension;

                        objApplicants._ApplicantTypeMasterID = new ApplicantTypeMaster();
                        objApplicants._ApplicantTypeMasterID.ApplicantType = GetApplicantDetails.tblMasterApplicantType.ApplicantType;
                    }
                    return objApplicants;
                }
            }
            catch (Exception ex)
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
                                EmployerName = itemEmploymentDetail.EmployerName.Trim(),
                                Income = itemEmploymentDetail.Income.Trim(),
                                SourceOfIncome = itemEmploymentDetail.SourceOfIncome,
                                Duration=itemEmploymentDetail.Duration.Trim(),
                                Status = itemEmploymentDetail.Status.Trim(),
                                _EmploymentTypeDetail= new EmploymentTypeMaster {
                                    ID = itemEmploymentDetail.tblMasterTypeOfEmployment.ID,
                                    EmployementType = itemEmploymentDetail.tblMasterTypeOfEmployment.EmployementType.Trim(),
                                    IsActive=itemEmploymentDetail.tblMasterTypeOfEmployment.IsActive
                                },
                                _ProfessionTypeDetail = new ProfessionTypeMaster
                                {
                                    ID=itemEmploymentDetail.tblMasterTypeOfProfession.ID,
                                    Profession= itemEmploymentDetail.tblMasterTypeOfProfession.Profession.Trim(),
                                    IsActive=itemEmploymentDetail.tblMasterTypeOfProfession.IsActive
                                }                        
                       
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
                        _objDetails.SourceOfIncome = _objEmploymentDetails._EmploymentTypeDetail.ID;
                        _objDetails.ProfessionTypeID = _objEmploymentDetails._ProfessionTypeDetail.ID;
                        _objDetails.EmployerName = _objEmploymentDetails.EmployerName;
                        _objDetails.Duration = _objEmploymentDetails.Duration;
                        _objDetails.Income = _objEmploymentDetails.Income;
                        _objDetails.Status = _objEmploymentDetails.Status;
                        _objDetails.CreatedOn = DateTime.Now;
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
                        fetchObj.SourceOfIncome =_objEmploymentDetails._EmploymentTypeDetail.ID;
                        fetchObj.ProfessionTypeID = _objEmploymentDetails._ProfessionTypeDetail.ID;
                        fetchObj.EmployerName = _objEmploymentDetails.EmployerName;
                        fetchObj.Duration = _objEmploymentDetails.Duration;
                        fetchObj.Income = _objEmploymentDetails.Income;
                        fetchObj.Status = _objEmploymentDetails.Status;
                        fetchObj.ModifiedOn = DateTime.Now;
                        fetchObj.tblApplicant.ApplicantID = _objEmploymentDetails.ModifiedBy.GetValueOrDefault();
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
                                _QualificationTypeDetail = new QualificationTypeMaster()
                                {
                                    ID = itemQualificationDetail.tblMasterTypeOfQualification.ID,
                                    Qualifications = itemQualificationDetail.tblMasterTypeOfQualification.Qualifications,
                                    IsActive = itemQualificationDetail.tblMasterTypeOfQualification.IsActive
                                }
                            });
                        }
                    }
                    return objApplicantQualificationDetails;
                }
            }
            catch (Exception ex)
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
                        _objDetails.TypeOfQualification = _objQualificationDetails._QualificationTypeDetail.ID;
                        _objDetails.CreatedOn = DateTime.Now;
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
                        fetchObj.TypeOfQualification = _objQualificationDetails._QualificationTypeDetail.ID;
                        fetchObj.ModifiedOn = DateTime.Now;
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
                        _objAppCommDetails.CreatedOn = DateTime.Now;
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
                        FetchDetailsOfEmployment.ModifiedOn = DateTime.Now;
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
                        FetchApplicantPersonalDetails.ApplicantImage = ApplicantPersonalDetails.ApplicantImage;
                        FetchApplicantPersonalDetails.FileName = ApplicantPersonalDetails.FileName;
                        FetchApplicantPersonalDetails.ModifiedOn = DateTime.Now;
                        FetchApplicantPersonalDetails.ModifiedBy = ApplicantPersonalDetails.ModifiedBy;
                        FetchApplicantPersonalDetails.FileTypeID = db.tblMasterFileTypes.Where(p => p.FileType == ApplicantPersonalDetails.FileType).Select(a => a.ID).FirstOrDefault();

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
                        FetchLoanApplicationDetails.ModifiedOn = DateTime.Now;

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
                        _tblApplicant.CreatedOn = DateTime.Now;
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
                        _tblApplicantQualificationDetails.CreatedOn = DateTime.Now;

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
                        _tblApplicantEmploymentDetail.CreatedOn = DateTime.Now;

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
                        _tblApplicantCommunicationDetail.CreatedOn = DateTime.Now;

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
                        _tblLoanGuarantorDetail.Title = _objGuarantorDetails.Title;
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
                        _tblLoanGuarantorDetail.CreatedOn = DateTime.Now;

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
        public List<LoanGuarantorDetails> GetAddedGuarantorGrid(Guid loanAppID)
        {
            List<LoanGuarantorDetails> objGuarantorDetails = new List<LoanGuarantorDetails>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAllGuarantors = db.tblLoanGuarantors.Where(p => p.LoanApplicationNo==loanAppID).ToList();

                    foreach (var itemGetAllGuarantors in GetAllGuarantors)
                    {
                        objGuarantorDetails.Add(new LoanGuarantorDetails
                        {
                            GuarantorID = itemGetAllGuarantors.GuarantorID,
                            LoanApplicationNo = itemGetAllGuarantors.LoanApplicationNo,
                            Title = itemGetAllGuarantors.Title,
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
                        objtoReturn.Title = GetGuarantorDetails.Title;
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
                        FetchGuarantorDetails.Title = _objUpdateGuartDetails.Title;
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
                        FetchGuarantorDetails.ModifiedOn = DateTime.Now;

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
        public bool AddAsset(Asset _objAssetDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objAssetDetails != null)
                    {
                        tblAsset _tblAssetDetail = new tblAsset();
                        _tblAssetDetail.AssetID = Guid.NewGuid();
                        _tblAssetDetail.AssetTypeID = _objAssetDetails.AssetTypeID;
                        _tblAssetDetail.ApplicantID = _objAssetDetails.ApplicantID;
                        _tblAssetDetail.Description = _objAssetDetails.Description;
                        _tblAssetDetail.NetValue = _objAssetDetails.NetValue;
                        _tblAssetDetail.Ownership = _objAssetDetails.Ownership;
                        _tblAssetDetail.CreatedOn = DateTime.Now;
                        tblApplicant _tblApplicant = new tblApplicant();
                        _tblApplicant.FirstName = _objAssetDetails._ApplicationID.FirstName;

                        db.tblAssets.Add(_tblAssetDetail);
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
        public List<Asset> GetAddedAssetGrid(Guid LoanApplicationNo)
        {          
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var Assetdata = (from tla in db.tblLoanApplicationForms
                                     join ta in db.tblApplicants on tla.LoanApplicationNo equals ta.LoanApplicationNo
                                     join tas in db.tblAssets on ta.ApplicantID equals tas.ApplicantID
                                     join tma in db.tblMasterAssetTypes on tas.AssetTypeID equals tma.AssetTypeID
                                     where tla.LoanApplicationNo == LoanApplicationNo
                                     select new
                                     {
                                         _Description = tas.Description,
                                         _AssetID = tas.AssetID,
                                         _NetValue = tas.NetValue,
                                         _Ownership = tas.Ownership,
                                         _AssetType = tma.AssetType,
                                         _AssetTypeID = tma.AssetTypeID,
                                         _firstName=ta.FirstName,
                                         _applicantID=ta.ApplicantID
                                     }).ToList().Select(x => new Asset()
                                     {
                                         Description = x._Description,
                                         AssetID = x._AssetID,
                                         NetValue = x._NetValue,
                                         Ownership = x._Ownership,
                                         AssetTypeID = x._AssetTypeID,
                                         AssetType = x._AssetType,
                                         FirstName = x._firstName,
                                         ApplicantID= x._applicantID
                                     }).ToList();
                    return Assetdata;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Asset GetAssetDetails(string ClientID)
        {
            try
            {
                Asset objtoReturn = new Asset();
                Guid ApplicantID = Guid.Parse(ClientID);

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetAssetDetails = db.tblAssets.Where(p => p.ApplicantID == ApplicantID).FirstOrDefault();
                    if (GetAssetDetails != null)
                    {
                        objtoReturn.AssetID = GetAssetDetails.AssetID;
                        objtoReturn.Description = GetAssetDetails.Description;
                        objtoReturn.NetValue = GetAssetDetails.NetValue;
                        objtoReturn.Ownership = GetAssetDetails.Ownership;
                        objtoReturn.ApplicantID = GetAssetDetails.ApplicantID;
                        objtoReturn.FirstName = GetAssetDetails.tblApplicant.FirstName;
                        objtoReturn.AssetType = GetAssetDetails.tblMasterAssetType.AssetType;
                        objtoReturn.AssetTypeID = GetAssetDetails.tblMasterAssetType.AssetTypeID;
                       
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public bool UpdateAssetDetails(Asset _objAssetDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchAssetDetails = db.tblAssets.Where(p => p.AssetID == _objAssetDetails.AssetID).FirstOrDefault();
                    if (FetchAssetDetails != null)
                    {
                        FetchAssetDetails.AssetID = _objAssetDetails.AssetID;
                        FetchAssetDetails.ApplicantID = _objAssetDetails.ApplicantID;
                        FetchAssetDetails.AssetTypeID = _objAssetDetails.AssetTypeID;
                        FetchAssetDetails.Description = _objAssetDetails.Description;
                        FetchAssetDetails.NetValue = _objAssetDetails.NetValue;
                        FetchAssetDetails.Ownership = _objAssetDetails.Ownership;
                        FetchAssetDetails.ModifiedOn = DateTime.Now;
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
        public bool AddLiability(Liability _objLiabilityDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objLiabilityDetails != null)
                    {
                        tblLiability _tblLiabilityDetail = new tblLiability();
                        _tblLiabilityDetail.LiabilityID = Guid.NewGuid();
                        _tblLiabilityDetail.LiabilityTypeID = _objLiabilityDetails.LiabilityTypeID;
                        _tblLiabilityDetail.ApplicantID = _objLiabilityDetails.ApplicantID;
                        _tblLiabilityDetail.Description = _objLiabilityDetails.Description;
                        _tblLiabilityDetail.NetValue = _objLiabilityDetails.NetValue;
                        _tblLiabilityDetail.Ownership = _objLiabilityDetails.Ownership;
                        _tblLiabilityDetail.CreatedOn = DateTime.Now;
                        tblApplicant _tblApplicant = new tblApplicant();
                        _tblApplicant.FirstName = _objLiabilityDetails.FirstName;

                        db.tblLiabilities.Add(_tblLiabilityDetail);
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
        public List<Liability> GetAddedLiabilityGrid(Guid LoanApplicationNo)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var liabilitydata = (from tla in db.tblLoanApplicationForms
                                     join ta in db.tblApplicants on tla.LoanApplicationNo equals ta.LoanApplicationNo
                                     join tl in db.tblLiabilities on ta.ApplicantID equals tl.ApplicantID
                                     join tml in db.tblMasterLiabilityTypes on tl.LiabilityTypeID equals tml.LiabilityTypeID
                                     where tla.LoanApplicationNo == LoanApplicationNo
                                     select new
                                     {
                                         _Description = tl.Description,
                                         _LiabilityID = tl.LiabilityID,
                                         _NetValue = tl.NetValue,
                                         _Ownership = tl.Ownership,
                                         _LiabilityTypeID = tml.LiabilityTypeID,
                                         _LiabilityType = tml.LiabilityType,
                                         _firstName = ta.FirstName,
                                         _applicantID = ta.ApplicantID
                                     }).ToList().Select(x => new Liability()
                                     {
                                         Description = x._Description,
                                         LiabilityID = x._LiabilityID,
                                         NetValue = x._NetValue,
                                         Ownership = x._Ownership,
                                         LiabilityTypeID = x._LiabilityTypeID,
                                         LiabilityType = x._LiabilityType,
                                         FirstName = x._firstName,
                                         ApplicantID=x._applicantID
                                     }).ToList();
                    return liabilitydata;
                }
            }
            
            catch (Exception ex)
            {
                return null;
            }
        }
        public Liability GetLiabilityDetails(string LbltyID)
        {
            try
            {
                Liability objtoReturn = new Liability();
                Guid LiabilityID = Guid.Parse(LbltyID);

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetLiabilityDetails = db.tblLiabilities.Where(p => p.LiabilityID == LiabilityID).FirstOrDefault();
                    if (GetLiabilityDetails != null)
                    {
                        objtoReturn.LiabilityID = GetLiabilityDetails.LiabilityID;
                        objtoReturn.Description = GetLiabilityDetails.Description;
                        objtoReturn.NetValue = GetLiabilityDetails.NetValue;
                        objtoReturn.Ownership = GetLiabilityDetails.Ownership;
                        objtoReturn.ApplicantID = GetLiabilityDetails.ApplicantID;
                        objtoReturn.FirstName = GetLiabilityDetails.tblApplicant.FirstName;
                        objtoReturn.LiabilityType = GetLiabilityDetails.tblMasterLiabilityType.LiabilityType;
                        objtoReturn.LiabilityTypeID = GetLiabilityDetails.tblMasterLiabilityType.LiabilityTypeID;
          
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public bool UpdateLiabilityDetails(Liability _objLiabilityDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchLiabilityDetails = db.tblLiabilities.Where(p => p.LiabilityID == _objLiabilityDetails.LiabilityID).FirstOrDefault();
                    if (FetchLiabilityDetails != null)
                    {
                        FetchLiabilityDetails.LiabilityID = _objLiabilityDetails.LiabilityID;
                        FetchLiabilityDetails.ApplicantID = _objLiabilityDetails.ApplicantID;
                        FetchLiabilityDetails.LiabilityTypeID = _objLiabilityDetails.LiabilityTypeID;
                        FetchLiabilityDetails.Description = _objLiabilityDetails.Description;
                        FetchLiabilityDetails.NetValue = _objLiabilityDetails.NetValue;
                        FetchLiabilityDetails.Ownership = _objLiabilityDetails.Ownership;
                        FetchLiabilityDetails.ModifiedOn = DateTime.Now;

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
        public bool AddLoanApplicationDetails(LoanApplicationForms LoanApplicationDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (LoanApplicationDetails != null)
                    {
                        Guid advisorGuid  = db.tblAdvisorDetails.Single(x => x.AutoID == LoanApplicationDetails._AdvisorID.AutoID).AdvisorID;
                        tblLoanApplicationForm _tblLoanApplicationFormDetails = new tblLoanApplicationForm();
                        _tblLoanApplicationFormDetails.LoanApplicationNo = Guid.NewGuid();

                        _tblLoanApplicationFormDetails.StatusID = LoanApplicationDetails._StatusID.ID;
                        _tblLoanApplicationFormDetails.PropertyTypeID = LoanApplicationDetails._PropertyTypeID.ID;
                        _tblLoanApplicationFormDetails.PurposeOfLoanID = LoanApplicationDetails._PurposeOfLoanID.ID;
                        _tblLoanApplicationFormDetails.RateTypeID = LoanApplicationDetails._RateTypeID.ID;
                        _tblLoanApplicationFormDetails.AdvisorID = advisorGuid;

                        _tblLoanApplicationFormDetails.ApplicationFormNumber = LoanApplicationDetails.ApplicationFormNumber;
                        _tblLoanApplicationFormDetails.TypeOfLoanID = LoanApplicationDetails._TypeOfLoanID.ID;
                        _tblLoanApplicationFormDetails.ApplicationFormNumber = LoanApplicationDetails.ApplicationFormNumber;
                        _tblLoanApplicationFormDetails.AgeOfProperty = LoanApplicationDetails.AgeOfProperty;
                        _tblLoanApplicationFormDetails.ApprovalExpiryDate = LoanApplicationDetails.ApprovalExpiryDate;
                        _tblLoanApplicationFormDetails.CashInHand = LoanApplicationDetails.CashInHand;
                        _tblLoanApplicationFormDetails.CostOfProperty = LoanApplicationDetails.CostOfProperty;
                        _tblLoanApplicationFormDetails.FinanceRequired = LoanApplicationDetails.FinanceRequired;
                        _tblLoanApplicationFormDetails.Frequency = LoanApplicationDetails.Frequency;
                        _tblLoanApplicationFormDetails.IsAnyGuarantor = LoanApplicationDetails.IsAnyGuarantor;
                        _tblLoanApplicationFormDetails.IsApplicationApproved = LoanApplicationDetails.IsApplicationApproved;
                        _tblLoanApplicationFormDetails.IsPreApproval = LoanApplicationDetails.IsPreApproval;
                        _tblLoanApplicationFormDetails.IsPropertyDecided = LoanApplicationDetails.IsPropertyDecided;
                        _tblLoanApplicationFormDetails.IsShifted = LoanApplicationDetails.IsShifted;
                        _tblLoanApplicationFormDetails.LoanTerm = LoanApplicationDetails.LoanTerm;
                        _tblLoanApplicationFormDetails.Priority = LoanApplicationDetails.Priority;
                        _tblLoanApplicationFormDetails.PropertyUsedFor = LoanApplicationDetails.PropertyUsedFor;
                        _tblLoanApplicationFormDetails.IsPreApproval = LoanApplicationDetails.IsPreApproval;
                        _tblLoanApplicationFormDetails.ReasonForNotApproval = LoanApplicationDetails.ReasonForNotApproval;
                        _tblLoanApplicationFormDetails.ShiftedDuration = LoanApplicationDetails.ShiftedDuration;
                        _tblLoanApplicationFormDetails.CreatedOn = DateTime.Now;

                        db.tblLoanApplicationForms.Add(_tblLoanApplicationFormDetails);
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
        public bool AddExpenseSheet(ApplicantExpenseSheet _objApplicantExpenseSheet)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objApplicantExpenseSheet != null)
                    {
                        tblApplicantExpenseSheet _tblExpenseDetails = new tblApplicantExpenseSheet();
                        _tblExpenseDetails.ExpenseID = Guid.NewGuid();
                        _tblExpenseDetails.ExpenseTypeID = _objApplicantExpenseSheet.ExpenseTypeID;
                        _tblExpenseDetails.ApplicantID = _objApplicantExpenseSheet.ApplicantID;
                        _tblExpenseDetails.Description = _objApplicantExpenseSheet.Description;
                        _tblExpenseDetails.Frequency = _objApplicantExpenseSheet.Frequency;
                        _tblExpenseDetails.NetAmount = _objApplicantExpenseSheet.NetAmount;
                        _tblExpenseDetails.CreatedOn = DateTime.Now;
                        tblApplicant _tblApplicant = new tblApplicant();
                        _tblApplicant.FirstName = _objApplicantExpenseSheet._ApplicationID.FirstName;

                        db.tblApplicantExpenseSheets.Add(_tblExpenseDetails);
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
        public List<ApplicantExpenseSheet> GetAddedExpenseSheetGrid(Guid LoanAppNo)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var Expensedata = (from tla in db.tblApplicantExpenseSheets
                                     join ta in db.tblApplicants on tla.ApplicantID equals ta.ApplicantID
                                     join tme in db.tblMasterExpenseTypes on tla.ExpenseTypeID equals tme.ExpenseTypeID
                                     join tlf in db.tblLoanApplicationForms on ta.LoanApplicationNo equals tlf.LoanApplicationNo
                                     where tlf.LoanApplicationNo == LoanAppNo
                                       select new
                                     {
                                         _Description = tla.Description,
                                         _ExpenseID = tla.ExpenseID,
                                         _NetAmount = tla.NetAmount,
                                         _Frequency = tla.Frequency,
                                         _ExpenseTypeID = tla.ExpenseTypeID,
                                         _ExpenseType = tme.ExpenseType,
                                         _firstName = ta.FirstName,
                                         _applicantID = ta.ApplicantID
                                     }).ToList().Select(x => new ApplicantExpenseSheet()
                                     {
                                         Description = x._Description,
                                         ExpenseID = x._ExpenseID,
                                         NetAmount = x._NetAmount,
                                         Frequency = x._Frequency,
                                         ExpenseTypeID = x._ExpenseTypeID,
                                         ExpenseType = x._ExpenseType,
                                         FirstName = x._firstName,
                                         ApplicantID = x._applicantID
                                     }).ToList();
                    return Expensedata;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public ApplicantExpenseSheet GetExpenseSheetDetails(Guid ApplicantID)
        {
            try
            {
                ApplicantExpenseSheet objtoReturn = new ApplicantExpenseSheet();

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetExpenseDetails = db.tblApplicantExpenseSheets.Where(p => p.ApplicantID == ApplicantID).FirstOrDefault();
                    if (GetExpenseDetails != null)
                    {
                        objtoReturn.ExpenseID = GetExpenseDetails.ExpenseID;
                        objtoReturn.Description = GetExpenseDetails.Description;
                        objtoReturn.NetAmount = GetExpenseDetails.NetAmount;
                        objtoReturn.Frequency = GetExpenseDetails.Frequency;
                        objtoReturn.ApplicantID = GetExpenseDetails.ApplicantID;
                        objtoReturn.ExpenseType = GetExpenseDetails.tblMasterExpenseType.ExpenseType;
                        objtoReturn.ExpenseTypeID = GetExpenseDetails.tblMasterExpenseType.ExpenseTypeID;
                        objtoReturn.FirstName = GetExpenseDetails.tblApplicant.FirstName;
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public bool UpdateExpenseSheetDetails(ApplicantExpenseSheet _objApplicantExpenseSheet)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchExpenseDetails = db.tblApplicantExpenseSheets.Where(p => p.ApplicantID == _objApplicantExpenseSheet.ApplicantID).FirstOrDefault();
                    if (FetchExpenseDetails != null)
                    {
                        FetchExpenseDetails.ExpenseID = _objApplicantExpenseSheet.ExpenseID;
                        FetchExpenseDetails.ApplicantID = _objApplicantExpenseSheet.ApplicantID;
                        FetchExpenseDetails.ExpenseTypeID = _objApplicantExpenseSheet.ExpenseTypeID;
                        FetchExpenseDetails.Description = _objApplicantExpenseSheet.Description;
                        FetchExpenseDetails.NetAmount = _objApplicantExpenseSheet.NetAmount;
                        FetchExpenseDetails.Frequency = _objApplicantExpenseSheet.Frequency;
                        FetchExpenseDetails.ModifiedOn = DateTime.Now;

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

        #endregion AIMFINSERV application code

        #region Client Dashboard Application code
        #region Personal Module
        public Applicants GetPersonalDetailsByAppID(Guid ApplicantID)
        {
            Applicants objapp = new Applicants();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchapplicantsprsnldtls = (from ta in db.tblApplicants
                                                    join tca in db.tblApplicantCommunicationDetails on ta.ApplicantID equals tca.ApplicantID
                                                    join tma in db.tblMasterAddressTypes on tca.AddressType equals tma.ID
                                                    join tmf in db.tblMasterFileTypes on ta.FileTypeID equals tmf.ID
                                                    where ta.ApplicantID == ApplicantID
                                                    select new Applicants
                                                    {
                                                        LoanApplicationNo = ta.LoanApplicationNo,
                                                        Title = ta.Title,
                                                        ApplicantID = ta.ApplicantID,
                                                        FirstName = ta.FirstName,
                                                        MiddleName = ta.MiddleName,
                                                        LastName = ta.LastName,
                                                        DateOfBirth = ta.DateOfBirth,
                                                        Gender = ta.Gender,
                                                        MaritalStatus = ta.MaritalStatus,
                                                        MobileNo = ta.MobileNo,
                                                        HomePhoneNo = ta.HomePhoneNo,
                                                        WorkPhoneNo = ta.WorkPhoneNo,
                                                        EmailID = ta.EmailID,
                                                        AddressLine1 = tca.AddressLine1,
                                                        AddressLine2 = tca.AddressLine2,
                                                        AddressLine3 = tca.AddressLine3,
                                                        ZipCode = tca.ZipCode,
                                                        Country = tca.Country,
                                                        Type = tma.Type,
                                                        ApplicantImage = ta.ApplicantImage,
                                                        FileName = ta.FileName,
                                                        FileType = tmf.FileType,
                                                        Extension = tmf.Extension,
                                                        FileTypeID = tmf.ID
                                                    }).FirstOrDefault();
                    return fetchapplicantsprsnldtls;
                }

            }
            catch
            {
                return null;
            }
        }
        public bool UpdatePersonalDetailsByAppID(Applicants _objApplicantsDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchPersonalDetails = db.tblApplicants.Where(p => p.ApplicantID == _objApplicantsDetails.ApplicantID).FirstOrDefault();
                    if (FetchPersonalDetails != null)
                    {
                        FetchPersonalDetails.ApplicantID = _objApplicantsDetails.ApplicantID;
                        FetchPersonalDetails.LoanApplicationNo = _objApplicantsDetails.LoanApplicationNo;
                        FetchPersonalDetails.Title = _objApplicantsDetails.Title;
                        FetchPersonalDetails.FirstName = _objApplicantsDetails.FirstName;
                        FetchPersonalDetails.MiddleName = _objApplicantsDetails.MiddleName;
                        FetchPersonalDetails.LastName = _objApplicantsDetails.LastName;
                        FetchPersonalDetails.DateOfBirth = _objApplicantsDetails.DateOfBirth;
                        FetchPersonalDetails.Gender = _objApplicantsDetails.Gender;
                        FetchPersonalDetails.MaritalStatus = _objApplicantsDetails.MaritalStatus;
                        FetchPersonalDetails.MobileNo = _objApplicantsDetails.MobileNo;
                        FetchPersonalDetails.HomePhoneNo = _objApplicantsDetails.HomePhoneNo;
                        FetchPersonalDetails.WorkPhoneNo = _objApplicantsDetails.WorkPhoneNo;
                        FetchPersonalDetails.EmailID = _objApplicantsDetails.EmailID;
                        FetchPersonalDetails.ApplicantImage = _objApplicantsDetails.ApplicantImage;
                        FetchPersonalDetails.FileName = _objApplicantsDetails.FileName;
                        FetchPersonalDetails.ModifiedOn = DateTime.Now;
                        FetchPersonalDetails.FileTypeID = db.tblMasterFileTypes.Where(a => a.FileType == _objApplicantsDetails.FileType).Select(a => a.ID).FirstOrDefault();
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
        public bool UpdateAddressesByAppID(ApplicantCommunicationDetails _objApplicantComDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchAddresses = db.tblApplicantCommunicationDetails.Where(p => p.ApplicantID == _objApplicantComDetails.ApplicantID).FirstOrDefault();
                    if (fetchAddresses != null)
                    {
                        fetchAddresses.AddressType = _objApplicantComDetails.AddressType;
                        fetchAddresses.tblMasterAddressType.Type = _objApplicantComDetails.Type;
                        fetchAddresses.AddressLine1 = _objApplicantComDetails.AddressLine1;
                        fetchAddresses.AddressLine2 = _objApplicantComDetails.AddressLine2;
                        fetchAddresses.AddressLine3 = _objApplicantComDetails.AddressLine3;
                        fetchAddresses.Country = _objApplicantComDetails.Country;
                        fetchAddresses.ZipCode = _objApplicantComDetails.ZipCode;
                        fetchAddresses.ModifiedOn = DateTime.Now;
                    }
                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }


        }
        #endregion

        #region Communication Module
        public List<ApplicantCommunicationDetails> GetAddresses(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var dataforAddresses = (from ta in db.tblApplicants
                                            join tlc in db.tblApplicantCommunicationDetails on ta.ApplicantID equals tlc.ApplicantID
                                            join tlma in db.tblMasterAddressTypes on tlc.AddressType equals tlma.ID
                                            where ta.ApplicantID == ApplicantID
                                            select new
                                            {
                                                _communicationID = tlc.CommunicationID,
                                                _FirstName = ta.FirstName,
                                                _MiddleName = ta.MiddleName,
                                                _LastName = ta.LastName,
                                                _ApplicantID = ta.ApplicantID,
                                                _AddressType = tlma.Type,
                                                _Type = tlc.AddressType,
                                                _AddressLine1 = tlc.AddressLine1,
                                                _AddressLine2 = tlc.AddressLine2,
                                                _AddressLine3 = tlc.AddressLine3,
                                                _Country = tlc.Country,
                                                _ZipCode = tlc.ZipCode,

                                            }).ToList().Select(x => new ApplicantCommunicationDetails()
                                            {
                                                CommunicationID = x._communicationID,
                                                FirstName = x._FirstName,
                                                MiddleName = x._MiddleName,
                                                LastName = x._LastName,
                                                ApplicantID = x._ApplicantID,
                                                AddressType = x._Type,
                                                Type = x._AddressType,
                                                AddressLine1 = x._AddressLine1,
                                                AddressLine2 = x._AddressLine2,
                                                AddressLine3 = x._AddressLine3,
                                                Country = x._Country,
                                                ZipCode = x._ZipCode
                                            }).ToList();

                    return dataforAddresses;
                }

            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public ApplicantCommunicationDetails GetCommunicationDetailsByAppID(Guid ApplicantID)
        {
            ApplicantCommunicationDetails objapp = new ApplicantCommunicationDetails();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchapplicantsprsnldtls = (from ta in db.tblApplicants
                                                    join tlc in db.tblApplicantCommunicationDetails on ta.ApplicantID equals tlc.ApplicantID
                                                    join tlma in db.tblMasterAddressTypes on tlc.AddressType equals tlma.ID
                                                    where ta.ApplicantID == ApplicantID
                                                    select new ApplicantCommunicationDetails
                                                    {
                                                        FirstName = ta.FirstName,
                                                        MiddleName = ta.MiddleName,
                                                        LastName = ta.LastName,
                                                        ApplicantID = ta.ApplicantID,
                                                        Type = tlma.Type,
                                                        AddressType = tlc.AddressType,
                                                        AddressLine1 = tlc.AddressLine1,
                                                        AddressLine2 = tlc.AddressLine2,
                                                        AddressLine3 = tlc.AddressLine3,
                                                        Country = tlc.Country,
                                                        ZipCode = tlc.ZipCode,
                                                    }).FirstOrDefault();
                    return fetchapplicantsprsnldtls;
                }

            }
            catch
            {
                return null;
            }
        }
        public bool AddNewAddressByAppID(ApplicantCommunicationDetails _objApplicantComDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objApplicantComDetails != null)
                    {
                        tblApplicantCommunicationDetail _objDetails = new tblApplicantCommunicationDetail();
                        if (_objApplicantComDetails.CommunicationID == Guid.Empty)
                        {

                            _objDetails.CommunicationID = Guid.NewGuid();
                            _objDetails.ApplicantID = _objApplicantComDetails.ApplicantID;
                            _objDetails.AddressLine1 = _objApplicantComDetails.AddressLine1;
                            _objDetails.AddressLine2 = _objApplicantComDetails.AddressLine2;
                            _objDetails.AddressLine3 = _objApplicantComDetails.AddressLine3;
                            _objDetails.Country = _objApplicantComDetails.Country;
                            _objDetails.Duration = _objApplicantComDetails.Duration;
                            _objDetails.ZipCode = _objApplicantComDetails.ZipCode;
                            _objDetails.AddressType = _objApplicantComDetails.ID;
                            _objDetails.CreatedOn = DateTime.Now;

                            db.tblApplicantCommunicationDetails.Add(_objDetails);

                            db.SaveChanges();
                        }
                        else
                        {
                            _objDetails = db.tblApplicantCommunicationDetails.Where(a => a.CommunicationID == _objApplicantComDetails.CommunicationID).FirstOrDefault();
                            if (_objDetails != null)
                            {
                                _objDetails.CommunicationID = _objApplicantComDetails.CommunicationID;
                                _objDetails.ApplicantID = _objApplicantComDetails.ApplicantID;
                                _objDetails.AddressLine1 = _objApplicantComDetails.AddressLine1;
                                _objDetails.AddressLine2 = _objApplicantComDetails.AddressLine2;
                                _objDetails.AddressLine3 = _objApplicantComDetails.AddressLine3;
                                _objDetails.tblMasterAddressType.Type = _objApplicantComDetails.Type;
                                _objDetails.Country = _objApplicantComDetails.Country;
                                _objDetails.Duration = _objApplicantComDetails.Duration;
                                _objDetails.ZipCode = _objApplicantComDetails.ZipCode;
                                _objDetails.ModifiedOn = DateTime.Now;

                                db.SaveChanges();
                            }
                        }
                    }
                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public ApplicantCommunicationDetails GetCommEditdata(Guid CommunicationID)
        {
            ApplicantCommunicationDetails objapp = new ApplicantCommunicationDetails();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var fetchapplicantscomdtls = (from ta in db.tblApplicants
                                                  join tlc in db.tblApplicantCommunicationDetails on ta.ApplicantID equals tlc.ApplicantID
                                                  join tlma in db.tblMasterAddressTypes on tlc.AddressType equals tlma.ID
                                                  where tlc.CommunicationID == CommunicationID
                                                  select new ApplicantCommunicationDetails
                                                  {
                                                      CommunicationID = tlc.CommunicationID,
                                                      ApplicantID = ta.ApplicantID,
                                                      Type = tlma.Type,
                                                      AddressType = tlc.AddressType,
                                                      AddressLine1 = tlc.AddressLine1,
                                                      AddressLine2 = tlc.AddressLine2,
                                                      AddressLine3 = tlc.AddressLine3,
                                                      Country = tlc.Country,
                                                      ZipCode = tlc.ZipCode,
                                                      Duration = tlc.Duration
                                                  }).FirstOrDefault();
                    return fetchapplicantscomdtls;
                }

            }
            catch
            {
                return null;
            }
        }
        public bool DeleteCommAddress(Guid CommunicationID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    tblApplicantCommunicationDetail obj = db.tblApplicantCommunicationDetails.Find(CommunicationID);

                    if (obj.CommunicationID != null)
                    {
                        db.tblApplicantCommunicationDetails.Remove(obj);
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
        #endregion

        #region Lending Module
        public bool UpdateLendingDetailsByAppID(LoanMasterDetails _objLoanMasterDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchLoanMaterDetails = db.tblLoanMasters.Where(p => p.LANNumber == _objLoanMasterDetails.LANNumber).FirstOrDefault();
                    if (FetchLoanMaterDetails != null)
                    {
                        FetchLoanMaterDetails.LANNumber = _objLoanMasterDetails.LANNumber;
                        FetchLoanMaterDetails.LoanApplicationNo = _objLoanMasterDetails.LoanApplicationNo;
                        FetchLoanMaterDetails.tblLoanApplicationForm.ApplicationFormNumber = _objLoanMasterDetails.ApplicationFormNumber;
                        FetchLoanMaterDetails.LoanTermOffered = _objLoanMasterDetails.LoanTermOffered;
                        FetchLoanMaterDetails.FrequencyOffered = _objLoanMasterDetails.FrequencyOffered;
                        FetchLoanMaterDetails.tblMasterTypeOfStatu.Status = _objLoanMasterDetails.Status;
                        FetchLoanMaterDetails.LoanProcessingFee = _objLoanMasterDetails.LoanProcessingFee;
                        FetchLoanMaterDetails.ROIOffered = _objLoanMasterDetails.ROIOffered;
                        FetchLoanMaterDetails.LoanAmountOffered = _objLoanMasterDetails.LoanAmountOffered;
                        FetchLoanMaterDetails.LoanValueRatio = _objLoanMasterDetails.LoanValueRatio;
                        FetchLoanMaterDetails.ClientID = _objLoanMasterDetails.ClientID;
                        FetchLoanMaterDetails.RateTypeOffered = _objLoanMasterDetails.RateTypeOffered;
                        FetchLoanMaterDetails.tblMasterPropertyType.PropertyType = _objLoanMasterDetails.PropertyType;
                        FetchLoanMaterDetails.EMIStartDay = _objLoanMasterDetails.EMIStartDay;
                        FetchLoanMaterDetails.Loanprovider = _objLoanMasterDetails.Loanprovider;
                        FetchLoanMaterDetails.tblMasterTypeOfLoan.LoanType = _objLoanMasterDetails.LoanType;
                        FetchLoanMaterDetails.NoOfEMI = _objLoanMasterDetails.NoOfEMI;
                        FetchLoanMaterDetails.AnyLegalCharges = _objLoanMasterDetails.AnyLegalCharges;
                        FetchLoanMaterDetails.ModifiedOn = DateTime.Now;

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
        public LoanMasterDetails GetLendingDetailsByAppID(Guid ApplicantID)
        {
            LoanMasterDetails objLoanMaster = new LoanMasterDetails();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var getAllLoans = (from tlm in db.tblLoanMasters
                                       join tlf in db.tblLoanApplicationForms on tlm.LoanApplicationNo equals tlf.LoanApplicationNo
                                       join tla in db.tblApplicants on tlf.LoanApplicationNo equals tla.LoanApplicationNo
                                       join tlmp in db.tblMasterPropertyTypes on tlm.PropertyTypeID equals tlmp.ID
                                       join tlms in db.tblMasterTypeOfStatus on tlm.StatusID equals tlms.ID
                                       join tlml in db.tblMasterTypeOfLoans on tlm.LoanTypeID equals tlml.ID
                                       where tla.ApplicantID == ApplicantID
                                       select new LoanMasterDetails
                                       {
                                           LANNumber = tlm.LANNumber,
                                           LoanApplicationNo = tlm.LoanApplicationNo,
                                           AutoID = tla.AutoID,
                                           ApplicationFormNumber = tlf.ApplicationFormNumber,
                                           LoanTermOffered = tlm.LoanTermOffered,
                                           StatusID = tlm.StatusID,
                                           LoanProcessingFee = tlm.LoanProcessingFee,
                                           ROIOffered = tlm.ROIOffered,
                                           LoanAmountOffered = tlm.LoanAmountOffered,
                                           LoanValueRatio = tlm.LoanValueRatio,
                                           ClientID = tlm.ClientID,
                                           RateTypeOffered = tlm.RateTypeOffered,
                                           PropertyTypeID = tlm.PropertyTypeID,
                                           EMIStartDay = tlm.EMIStartDay,
                                           Loanprovider = tlm.Loanprovider,
                                           LoanTypeID = tlm.LoanTypeID,
                                           NoOfEMI = tlm.NoOfEMI,
                                           AnyLegalCharges = tlm.AnyLegalCharges,
                                           FrequencyOffered = tlm.FrequencyOffered,
                                           PropertyType = tlmp.PropertyType,
                                           Status = tlms.Status,
                                           LoanType = tlml.LoanType
                                       }).FirstOrDefault();

                    return getAllLoans;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public List<LoanMasterDetails> GetMatLendingDetailsByAppID(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var dataforLending = (from tlm in db.tblLoanMasters
                                          join tlf in db.tblLoanApplicationForms on tlm.LoanApplicationNo equals tlf.LoanApplicationNo
                                          join tla in db.tblApplicants on tlf.LoanApplicationNo equals tla.LoanApplicationNo
                                          join tlmp in db.tblMasterPropertyTypes on tlm.PropertyTypeID equals tlmp.ID
                                          join tlms in db.tblMasterTypeOfStatus on tlm.StatusID equals tlms.ID
                                          join tlml in db.tblMasterTypeOfLoans on tlm.LoanTypeID equals tlml.ID
                                          where tla.ApplicantID == ApplicantID
                                          select new
                                          {
                                              _LANNumber = tlm.LANNumber,
                                              _LoanApplicationNo = tlm.LoanApplicationNo,
                                              _ApplicationFormNumber = tlf.ApplicationFormNumber,
                                              _LoanTermOffered = tlm.LoanTermOffered,
                                              _StatusID = tlm.StatusID,
                                              _LoanProcessingFee = tlm.LoanProcessingFee,
                                              _ROIOffered = tlm.ROIOffered,
                                              _LoanAmountOffered = tlm.LoanAmountOffered,
                                              _LoanValueRatio = tlm.LoanValueRatio,
                                              _ClientID = tlm.ClientID,
                                              _RateTypeOffered = tlm.RateTypeOffered,
                                              _PropertyTypeID = tlm.PropertyTypeID,
                                              _EMIStartDay = tlm.EMIStartDay,
                                              _Loanprovider = tlm.Loanprovider,
                                              _LoanTypeID = tlm.LoanTypeID,
                                              _NoOfEMI = tlm.NoOfEMI,
                                              _AnyLegalCharges = tlm.AnyLegalCharges,
                                              _FrequencyOffered = tlm.FrequencyOffered,
                                              _PropertyType = tlmp.PropertyType,
                                              _Status = tlms.Status,
                                              _LoanType = tlml.LoanType
                                          }).ToList().Select(x => new LoanMasterDetails()
                                          {
                                              LANNumber = x._LANNumber,
                                              LoanApplicationNo = x._LoanApplicationNo,
                                              ApplicationFormNumber = x._ApplicationFormNumber,
                                              LoanTermOffered = x._LoanTermOffered,
                                              StatusID = x._StatusID,
                                              LoanProcessingFee = x._LoanProcessingFee,
                                              ROIOffered = x._ROIOffered,
                                              LoanAmountOffered = x._LoanAmountOffered,
                                              LoanValueRatio = x._LoanValueRatio,
                                              ClientID = x._ClientID,
                                              RateTypeOffered = x._RateTypeOffered,
                                              PropertyTypeID = x._PropertyTypeID,
                                              EMIStartDay = x._EMIStartDay,
                                              Loanprovider = x._Loanprovider,
                                              LoanTypeID = x._LoanTypeID,
                                              NoOfEMI = x._NoOfEMI,
                                              AnyLegalCharges = x._AnyLegalCharges,
                                              FrequencyOffered = x._FrequencyOffered,
                                              PropertyType = x._PropertyType,
                                              Status = x._Status,
                                              LoanType = x._LoanType

                                          }).ToList();

                    return dataforLending;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public LoanMasterDetails ViewLendingDetailsByAppID(Guid LANNumber)
        {
            try
            {
                LoanMasterDetails objToReturn = new LoanMasterDetails();
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetLendingDetails = db.tblLoanMasters.Where(p => p.LANNumber == LANNumber).FirstOrDefault();
                    if (GetLendingDetails != null)
                    {
                        objToReturn.LANNumber = GetLendingDetails.LANNumber;
                        objToReturn.LoanApplicationNo = GetLendingDetails.LoanApplicationNo;
                        objToReturn.ApplicationFormNumber = GetLendingDetails.tblLoanApplicationForm.ApplicationFormNumber;
                        objToReturn.ClientID = GetLendingDetails.ClientID;
                        objToReturn.LoanTermOffered = GetLendingDetails.LoanTermOffered;
                        objToReturn.RateTypeOffered = GetLendingDetails.RateTypeOffered;
                        objToReturn.FrequencyOffered = GetLendingDetails.FrequencyOffered;
                        objToReturn.PropertyType = GetLendingDetails.tblMasterPropertyType.PropertyType;
                        objToReturn.Status = GetLendingDetails.tblMasterTypeOfStatu.Status;
                        objToReturn.LoanRateType = GetLendingDetails.tblMasterTypeOfLoan.LoanType;
                        objToReturn.LoanProcessingFee = GetLendingDetails.LoanProcessingFee;
                        objToReturn.ROIOffered = GetLendingDetails.ROIOffered;
                        objToReturn.LoanAmountOffered = GetLendingDetails.LoanAmountOffered;
                        objToReturn.LoanValueRatio = GetLendingDetails.LoanValueRatio;
                        objToReturn.EMIStartDay = GetLendingDetails.EMIStartDay;
                        objToReturn.Loanprovider = GetLendingDetails.Loanprovider;
                        objToReturn.LoanType = GetLendingDetails.tblMasterTypeOfLoan.LoanType;
                        objToReturn.NoOfEMI = GetLendingDetails.NoOfEMI;
                        objToReturn.AnyLegalCharges = GetLendingDetails.AnyLegalCharges;
                    }
                    return objToReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        #endregion

        #region Employment Module
        public ApplicantEmploymentDetails GetEmploymentDetailsByAppID(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    ApplicantEmploymentDetails objapp = new ApplicantEmploymentDetails();
                    var dataofapplicants = db.tblApplicantEmploymentDetails.Where(x => x.ApplicantID == ApplicantID).FirstOrDefault();
                    if (dataofapplicants != null)
                    {
                        objapp.AutoID = dataofapplicants.AutoID;
                        objapp.ApplicantID = dataofapplicants.ApplicantID;
                        objapp.EmploymentID = dataofapplicants.EmploymentID;
                        objapp.EmployerName = dataofapplicants.EmployerName;
                        objapp.Income = dataofapplicants.Income;
                        objapp.ProfessionTypeID = dataofapplicants.ProfessionTypeID;
                        objapp.SourceOfIncome = dataofapplicants.SourceOfIncome;
                        objapp.Status = dataofapplicants.Status;
                        objapp.Duration = dataofapplicants.Duration;
                        objapp.Income = dataofapplicants.Income;
                        objapp.EmployementType = dataofapplicants.tblMasterTypeOfEmployment.EmployementType;
                        objapp.Profession = dataofapplicants.tblMasterTypeOfProfession.Profession;
                        //objapp.Profession = dataofapplicants.tblMasterTypeOfProfession.Profession;

                    }

                    return objapp;
                }
            }

            catch (Exception ex)
            {
                return null;
            }
        }
        public bool UpdateEmploymentDetailsByAppID(ApplicantEmploymentDetails _objApplicantEmploymentDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchEmploymentDetails = db.tblApplicantEmploymentDetails.Where(p => p.EmploymentID == _objApplicantEmploymentDetails.EmploymentID).FirstOrDefault();
                    if (FetchEmploymentDetails != null)
                    {
                        FetchEmploymentDetails.EmploymentID = _objApplicantEmploymentDetails.EmploymentID;
                        FetchEmploymentDetails.AutoID = _objApplicantEmploymentDetails.AutoID;
                        FetchEmploymentDetails.ApplicantID = _objApplicantEmploymentDetails.ApplicantID;
                        FetchEmploymentDetails.SourceOfIncome = _objApplicantEmploymentDetails.SourceOfIncome;
                        FetchEmploymentDetails.ProfessionTypeID = _objApplicantEmploymentDetails.ProfessionTypeID;
                        FetchEmploymentDetails.Duration = _objApplicantEmploymentDetails.Duration;
                        FetchEmploymentDetails.EmployerName = _objApplicantEmploymentDetails.EmployerName;
                        FetchEmploymentDetails.Status = _objApplicantEmploymentDetails.Status;
                        FetchEmploymentDetails.Income = _objApplicantEmploymentDetails.Income;
                        FetchEmploymentDetails.tblMasterTypeOfEmployment.EmployementType = _objApplicantEmploymentDetails.EmployementType;
                        FetchEmploymentDetails.tblMasterTypeOfProfession.Profession = _objApplicantEmploymentDetails.Profession;
                        FetchEmploymentDetails.ModifiedOn = DateTime.Now;

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
        public List<ApplicantEmploymentDetails> GetMatEmploymentDetailsByAppID(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var dataforemployment = (from tle in db.tblApplicantEmploymentDetails
                                             join tla in db.tblApplicants on tle.ApplicantID equals tla.ApplicantID
                                             join tlmp in db.tblMasterTypeOfProfessions on tle.ProfessionTypeID equals tlmp.ID
                                             join tlme in db.tblMasterTypeOfEmployments on tle.SourceOfIncome equals tlme.ID
                                             where tla.ApplicantID == ApplicantID
                                             select new
                                             {
                                                 _AutoID = tle.AutoID,
                                                 _EmploymentID = tle.EmploymentID,
                                                 _ApplicantID = tla.ApplicantID,
                                                 _SourceOfIncome = tle.SourceOfIncome,
                                                 _Employment = tlme.EmployementType,
                                                 _Profession = tle.ProfessionTypeID,
                                                 _ProfessionType = tlmp.Profession,
                                                 _EmployerName = tle.EmployerName,
                                                 _Duration = tle.Duration,
                                                 _Income = tle.Income,
                                                 _Status = tle.Status
                                             }).ToList().Select(x => new ApplicantEmploymentDetails()
                                             {
                                                 AutoID = x._AutoID,
                                                 EmploymentID = x._EmploymentID,
                                                 ApplicantID = x._ApplicantID,
                                                 SourceOfIncome = x._SourceOfIncome,
                                                 EmployementType = x._Employment,
                                                 ProfessionTypeID = x._Profession,
                                                 Profession = x._ProfessionType,
                                                 EmployerName = x._EmployerName,
                                                 Duration = x._Duration,
                                                 Income = x._Income,
                                                 Status = x._Status


                                             }).ToList();

                    return dataforemployment;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public ApplicantEmploymentDetails ViewEmploymentDetailsByAppID(Guid EmploymentID)
        {
            try
            {
                ApplicantEmploymentDetails objtoReturn = new ApplicantEmploymentDetails();
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetEmploymentDetails = db.tblApplicantEmploymentDetails.Where(p => p.EmploymentID == EmploymentID).FirstOrDefault();
                    if (GetEmploymentDetails != null)
                    {
                        objtoReturn.AutoID = GetEmploymentDetails.AutoID;
                        objtoReturn.EmploymentID = GetEmploymentDetails.EmploymentID;
                        objtoReturn.ApplicantID = GetEmploymentDetails.ApplicantID;
                        objtoReturn.ProfessionTypeID = GetEmploymentDetails.ProfessionTypeID;
                        objtoReturn.Profession = GetEmploymentDetails.tblMasterTypeOfProfession.Profession;
                        objtoReturn.SourceOfIncome = GetEmploymentDetails.SourceOfIncome;
                        objtoReturn.Income = GetEmploymentDetails.Income;
                        objtoReturn.EmployerName = GetEmploymentDetails.EmployerName;
                        objtoReturn.EmployementType = GetEmploymentDetails.tblMasterTypeOfEmployment.EmployementType;
                        objtoReturn.Status = GetEmploymentDetails.Status;
                        objtoReturn.Duration = GetEmploymentDetails.Duration;
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        #endregion Employment Module

        #region Qualification Module
        public ApplicantQualificationDetails GetQualificationDetailsByAppID(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    ApplicantQualificationDetails objapp = new ApplicantQualificationDetails();
                    var dataofapplicants = db.tblApplicantQualificationDetails.Where(x => x.ApplicantID == ApplicantID).FirstOrDefault();
                    if (dataofapplicants != null)
                    {
                        objapp.AutoID = dataofapplicants.AutoID;
                        objapp.ApplicantID = dataofapplicants.ApplicantID;
                        objapp.QualificationID = dataofapplicants.QualificationID;
                        objapp.PassingYear = dataofapplicants.PassingYear;
                        objapp.CourseName = dataofapplicants.CourseName;
                        objapp.TypeOfQualification = dataofapplicants.TypeOfQualification;
                        objapp.UniversityName = dataofapplicants.UniversityName;
                        objapp.FirstName = dataofapplicants.tblApplicant.FirstName;
                        objapp.Qualifications = dataofapplicants.tblMasterTypeOfQualification.Qualifications;
                    }

                    return objapp;
                }
            }

            catch (Exception ex)
            {
                return null;
            }
        }
        public bool UpdateQualificationDetailsByAppID(ApplicantQualificationDetails _objApplicantQualificationDetails) {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchQualificationDetails = db.tblApplicantQualificationDetails.Where(p => p.QualificationID == _objApplicantQualificationDetails.QualificationID).FirstOrDefault();
                    if (FetchQualificationDetails != null)
                    {
                        FetchQualificationDetails.QualificationID = _objApplicantQualificationDetails.QualificationID;
                        FetchQualificationDetails.AutoID = _objApplicantQualificationDetails.AutoID;
                        FetchQualificationDetails.ApplicantID = _objApplicantQualificationDetails.ApplicantID;
                        FetchQualificationDetails.TypeOfQualification = _objApplicantQualificationDetails.TypeOfQualification;
                        FetchQualificationDetails.UniversityName = _objApplicantQualificationDetails.UniversityName;
                        FetchQualificationDetails.PassingYear = _objApplicantQualificationDetails.PassingYear;
                        FetchQualificationDetails.CourseName = _objApplicantQualificationDetails.CourseName;
                        FetchQualificationDetails.tblApplicant.FirstName = _objApplicantQualificationDetails.FirstName;
                        FetchQualificationDetails.ModifiedOn = DateTime.Now;

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
        public List<ApplicantQualificationDetails> GetMatQualificationDataByAppID(Guid ApplicantID)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var dataforQualifications = (from ta in db.tblApplicants
                                                 join tlq in db.tblApplicantQualificationDetails on ta.ApplicantID equals tlq.ApplicantID
                                                 join tlma in db.tblMasterTypeOfQualifications on tlq.TypeOfQualification equals tlma.ID
                                                 where ta.ApplicantID == ApplicantID
                                                 select new
                                                 {
                                                     _QualificationID = tlq.QualificationID,
                                                     _ApplicantID = ta.ApplicantID,
                                                     _QualificationType = tlma.ID,
                                                     _Type = tlma.Qualifications,
                                                     _University = tlq.UniversityName,
                                                     _CourseName = tlq.CourseName,
                                                     _PassingYear = tlq.PassingYear,
                                                 }).ToList().Select(x => new ApplicantQualificationDetails()
                                                 {
                                                     QualificationID = x._QualificationID,
                                                     ApplicantID = x._ApplicantID,
                                                     TypeOfQualification = x._QualificationType,
                                                     Qualifications = x._Type,
                                                     UniversityName = x._University,
                                                     CourseName = x._CourseName,
                                                     PassingYear = x._PassingYear
                                                 }).ToList();

                    return dataforQualifications;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public ApplicantQualificationDetails ViewQualificationDetailsByAppID(Guid QualificationID)
        {
            try
            {
                ApplicantQualificationDetails objtoReturn = new ApplicantQualificationDetails();
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var GetQualificationDetails = db.tblApplicantQualificationDetails.Where(p => p.QualificationID == QualificationID).FirstOrDefault();
                    if (GetQualificationDetails != null)
                    {
                        objtoReturn.AutoID = GetQualificationDetails.AutoID;
                        objtoReturn.QualificationID = GetQualificationDetails.QualificationID;
                        objtoReturn.ApplicantID = GetQualificationDetails.ApplicantID;
                        objtoReturn.UniversityName = GetQualificationDetails.UniversityName;
                        objtoReturn.CourseName = GetQualificationDetails.CourseName;
                        objtoReturn.TypeOfQualification = GetQualificationDetails.TypeOfQualification;
                        objtoReturn.PassingYear = GetQualificationDetails.PassingYear;
                        objtoReturn.Qualifications = GetQualificationDetails.tblMasterTypeOfQualification.Qualifications;
                    }
                    return objtoReturn;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        #endregion Qualification 
        #endregion Client Dashboard application code.
    }
}