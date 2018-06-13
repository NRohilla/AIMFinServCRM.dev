using System;
using System.Collections.Generic;
using FinServUnitOfWork.Interface;
using FinServDataModel;
using System.Linq;
using FinServBussinessEntities;

namespace FinServUnitOfWork.Repository
{
    public class UOWLoanMaster : ILoanMaster
    {
        public List<LoanMasterDetails> GetAllLoanMasterDetails()
        {
            List<LoanMasterDetails> objLoanMaster = new List<LoanMasterDetails>();
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var getAllLoans = db.tblLoanMasters.ToList();

                    foreach (var item in getAllLoans)
                    {
                        objLoanMaster.Add(new LoanMasterDetails
                        {
                            LANNumber = item.LANNumber,
                            LoanApplicationNo = item.LoanApplicationNo,
                            LoanAmountOffered = item.LoanAmountOffered,
                            ROIOffered = item.ROIOffered,
                            RateTypeOffered = item.RateTypeOffered,
                            LoanTermOffered = item.LoanTermOffered,
                            FrequencyOffered = item.FrequencyOffered,
                            PropertyTypeID = item.PropertyTypeID,
                            LoanTypeID = item.LoanTypeID,
                            FinanceDate = item.FinanceDate,
                            ClientID = item.ClientID,
                            StatusID = item.StatusID,
                            _loanApplicationDetails = new LoanApplicationForms()
                            {
                                LoanApplicationNo = item.tblLoanApplicationForm.LoanApplicationNo,
                                ApplicationFormNumber = item.tblLoanApplicationForm.ApplicationFormNumber,
                                IsApplicationApproved = item.tblLoanApplicationForm.IsApplicationApproved,
                                CostOfProperty = item.tblLoanApplicationForm.CostOfProperty,
                                AdvisorID = item.tblLoanApplicationForm.AdvisorID,
                                _AdvisorID = new AdvisorTypeDetails()
                                {
                                    AdvisorCode = item.tblLoanApplicationForm.tblAdvisorDetail.AdvisorCode,
                                    FirmName = item.tblLoanApplicationForm.tblAdvisorDetail.FirmName,
                                    EmailID = item.tblLoanApplicationForm.tblAdvisorDetail.EmailID,
                                    Name = item.tblLoanApplicationForm.tblAdvisorDetail.Name,
                                }
                            },
                            _typeOfLoanDetails = new LoanTypeMaster()
                            {
                                ID = item.tblMasterTypeOfLoan.ID,
                                LoanType = item.tblMasterTypeOfLoan.LoanType,
                                IsActive = item.tblMasterTypeOfLoan.IsActive,
                            },
                            _propertyTypeDetails = new PropertyTypeMaster()
                            {
                                ID = item.tblMasterPropertyType.ID,
                                PropertyType = item.tblMasterPropertyType.PropertyType,
                                IsActive = item.tblMasterPropertyType.IsActive,
                            },
                            _typeOfStatusDetails = new StatusTypeMaster()
                            {
                                ID = item.tblMasterTypeOfStatu.ID,
                                Status = item.tblMasterTypeOfStatu.Status,
                                IsActive = item.tblMasterTypeOfStatu.IsActive,
                            }

                        });
                    }

                    return objLoanMaster;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public LoanMasterDetails GetLoanMasterDetails(string lanNo)
        {
            try
            {
                LoanMasterDetails objtoReturn = new LoanMasterDetails();
                Guid _LANNo = Guid.Parse(lanNo);

                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var getLoanDetails = db.tblLoanMasters.Where(p => p.LANNumber == _LANNo).FirstOrDefault();
                    if (getLoanDetails != null)
                    {
                        objtoReturn.LoanApplicationNo = getLoanDetails.LoanApplicationNo;
                        objtoReturn.LANNumber = getLoanDetails.LANNumber;
                        objtoReturn.AutoID = getLoanDetails.AutoID;
                        objtoReturn.ROIOffered = getLoanDetails.ROIOffered;
                        objtoReturn.LoanTermOffered = getLoanDetails.LoanTermOffered;
                        objtoReturn.RateTypeOffered = getLoanDetails.RateTypeOffered;
                        objtoReturn.FrequencyOffered = getLoanDetails.FrequencyOffered;
                        objtoReturn.LoanValueRatio = getLoanDetails.LoanValueRatio;
                        objtoReturn.LoanAmountOffered = getLoanDetails.LoanAmountOffered;
                        objtoReturn.ClientID = getLoanDetails.ClientID;
                        objtoReturn.EMIStartDay = getLoanDetails.EMIStartDay;
                        objtoReturn.EMIStartMonth = getLoanDetails.EMIStartMonth;
                        objtoReturn.LoanProcessingFee = getLoanDetails.LoanProcessingFee;
                        objtoReturn.AnyLegalCharges = getLoanDetails.AnyLegalCharges;
                        objtoReturn.NoOfEMI = getLoanDetails.NoOfEMI;
                        objtoReturn.Loanprovider = getLoanDetails.Loanprovider;
                        objtoReturn.PropertyCost = getLoanDetails.PropertyCost;
                        objtoReturn.FinanceDate = getLoanDetails.FinanceDate;
                        objtoReturn.SettlementDate = getLoanDetails.SettlementDate;

                        objtoReturn.LoanTypeID = getLoanDetails.LoanTypeID;
                        objtoReturn._typeOfLoanDetails = new LoanTypeMaster();
                        objtoReturn._typeOfLoanDetails.ID = getLoanDetails.tblMasterTypeOfLoan.ID;
                        objtoReturn._typeOfLoanDetails.LoanType = getLoanDetails.tblMasterTypeOfLoan.LoanType;
                        objtoReturn._typeOfLoanDetails.IsActive = getLoanDetails.tblMasterTypeOfLoan.IsActive;

                        objtoReturn.PropertyTypeID = getLoanDetails.PropertyTypeID;
                        objtoReturn._propertyTypeDetails = new PropertyTypeMaster();
                        objtoReturn._propertyTypeDetails.ID = getLoanDetails.tblMasterPropertyType.ID;
                        objtoReturn._propertyTypeDetails.PropertyType = getLoanDetails.tblMasterPropertyType.PropertyType;

                        objtoReturn.StatusID = getLoanDetails.StatusID;
                        objtoReturn._typeOfStatusDetails = new StatusTypeMaster();
                        objtoReturn._typeOfStatusDetails.ID = getLoanDetails.tblMasterTypeOfStatu.ID;
                        objtoReturn._typeOfStatusDetails.Status = getLoanDetails.tblMasterTypeOfStatu.Status;
                        objtoReturn._typeOfStatusDetails.IsActive = getLoanDetails.tblMasterTypeOfStatu.IsActive;

                        objtoReturn._loanApplicationDetails = new LoanApplicationForms();
                        objtoReturn._loanApplicationDetails.LoanApplicationNo = getLoanDetails.tblLoanApplicationForm.LoanApplicationNo;
                        objtoReturn._loanApplicationDetails.ApplicationFormNumber = getLoanDetails.tblLoanApplicationForm.ApplicationFormNumber;
                        objtoReturn._loanApplicationDetails.AdvisorID = getLoanDetails.tblLoanApplicationForm.AdvisorID;

                        objtoReturn._loanApplicationDetails._AdvisorID = new AdvisorTypeDetails();
                        objtoReturn._loanApplicationDetails._AdvisorID.Name = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.Name;
                        objtoReturn._loanApplicationDetails._AdvisorID.FirmName = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.FirmName;
                        objtoReturn._loanApplicationDetails._AdvisorID.EmailID = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.EmailID;
                        objtoReturn._loanApplicationDetails._AdvisorID.AdvisorCode = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.AdvisorCode;
                        objtoReturn._loanApplicationDetails._AdvisorID.AdvisorGroup = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.AdvisorGroup;
                        objtoReturn._loanApplicationDetails._AdvisorID.PhoneNo = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.PhoneNo;
                        objtoReturn._loanApplicationDetails._AdvisorID.MobileNo = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.MobileNo;
                        objtoReturn._loanApplicationDetails._AdvisorID.IsActive = getLoanDetails.tblLoanApplicationForm.tblAdvisorDetail.IsActive;

                        //objtoReturn.CreatedBy = getLoanDetails.CreatedBy;
                        //objtoReturn.CreatedOn = getLoanDetails.CreatedOn;
                        //objtoReturn.ModifiedBy = getLoanDetails.ModifiedBy;
                        //objtoReturn.ModifiedOn = getLoanDetails.ModifiedOn;

                    }
                    return objtoReturn;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<LoanMasterDetails> GetLoanMasterGrid(Guid LoanApplicationNo) {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var datafromApplicants = (from tlm in db.tblLoanMasters
                                              join tba in db.tblApplicants on tlm.LoanApplicationNo equals tba.LoanApplicationNo
                                              join tmat in db.tblMasterApplicantTypes on tba.ApplicantTypeID equals tmat.ApplicantTypeID                                              
                                              where tlm.LoanApplicationNo == LoanApplicationNo
                                              select new
                                              {       
                                                _ApplicantID = tba.ApplicantID,
                                               _FirstName = tba.FirstName,
                                               _MiddleName = tba.MiddleName,
                                               _LastName = tba.LastName,
                                               _MobileNo = tba.MobileNo,
                                               _EmailId = tba.EmailID,
                                               _ApplicantType = tmat.ApplicantType
                                           }).ToList().Select(x => new LoanMasterDetails()
                                           {
                                               ApplicantID = x._ApplicantID,
                                               FirstName = x._FirstName,
                                               MiddleName = x._MiddleName,
                                               LastName = x._LastName,
                                               MobileNo = x._MobileNo,
                                               EmailID = x._EmailId,
                                               ApplicantType = x._ApplicantType
                                           }).ToList();

                    return datafromApplicants;

                }
            }

            catch (Exception ex)
            {
                return null;
            }
        }
  

        public bool UpdateLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails) {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    var FetchLoanMasterDetails = db.tblLoanMasters.Where(p => p.LANNumber == _objLoanMasterDetails.LANNumber).FirstOrDefault();
                    if (FetchLoanMasterDetails != null)
                    {
                        FetchLoanMasterDetails.LoanApplicationNo = _objLoanMasterDetails.LoanApplicationNo;
                        FetchLoanMasterDetails.LANNumber = _objLoanMasterDetails.LANNumber;
                        FetchLoanMasterDetails.ROIOffered = _objLoanMasterDetails.ROIOffered;
                        FetchLoanMasterDetails.AutoID = _objLoanMasterDetails.AutoID;
                        FetchLoanMasterDetails.LoanTermOffered = _objLoanMasterDetails.LoanTermOffered;
                        FetchLoanMasterDetails.RateTypeOffered = _objLoanMasterDetails.RateTypeOffered;
                        FetchLoanMasterDetails.FrequencyOffered = _objLoanMasterDetails.FrequencyOffered;
                        FetchLoanMasterDetails.LoanValueRatio = _objLoanMasterDetails.LoanValueRatio;
                        FetchLoanMasterDetails.LoanAmountOffered = _objLoanMasterDetails.LoanAmountOffered;
                        FetchLoanMasterDetails.ClientID = _objLoanMasterDetails.ClientID;
                        FetchLoanMasterDetails.EMIStartDay = _objLoanMasterDetails.EMIStartDay;
                        FetchLoanMasterDetails.EMIStartMonth = _objLoanMasterDetails.EMIStartMonth;
                        FetchLoanMasterDetails.LoanProcessingFee = _objLoanMasterDetails.LoanProcessingFee;
                        FetchLoanMasterDetails.AnyLegalCharges = _objLoanMasterDetails.AnyLegalCharges;
                        FetchLoanMasterDetails.NoOfEMI = _objLoanMasterDetails.NoOfEMI;
                        FetchLoanMasterDetails.Loanprovider = _objLoanMasterDetails.Loanprovider;
                        FetchLoanMasterDetails.PropertyCost = _objLoanMasterDetails.PropertyCost;
                        FetchLoanMasterDetails.FinanceDate = _objLoanMasterDetails.FinanceDate;
                        FetchLoanMasterDetails.SettlementDate = _objLoanMasterDetails.SettlementDate;
                        FetchLoanMasterDetails.PropertyTypeID = _objLoanMasterDetails.PropertyTypeID;
                        FetchLoanMasterDetails.StatusID = _objLoanMasterDetails.StatusID;
                        FetchLoanMasterDetails.LoanTypeID = _objLoanMasterDetails.LoanTypeID;
                        FetchLoanMasterDetails.ModifiedOn = DateTime.Now;

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

        public bool AddLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails)
        {
            try
            {
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    if (_objLoanMasterDetails != null)
                    {
                        Guid LoanAppnoGuid = db.tblLoanApplicationForms.Single(x => x.AutoID == _objLoanMasterDetails.AutoID).LoanApplicationNo;

                        tblLoanMaster _tblLoanMaster = new tblLoanMaster();
                        _tblLoanMaster.LANNumber = Guid.NewGuid();
                        _tblLoanMaster.LoanApplicationNo = LoanAppnoGuid;
                        _tblLoanMaster.PropertyTypeID = _objLoanMasterDetails.PropertyTypeID;
                        _tblLoanMaster.StatusID = _objLoanMasterDetails.StatusID;
                        _tblLoanMaster.LoanTypeID = _objLoanMasterDetails.LoanTypeID;
                        _tblLoanMaster.ClientID = _objLoanMasterDetails.ClientID;

                        _tblLoanMaster.ROIOffered = _objLoanMasterDetails.ROIOffered;
                        _tblLoanMaster.LoanTermOffered = _objLoanMasterDetails.LoanTermOffered;
                        _tblLoanMaster.RateTypeOffered = _objLoanMasterDetails.RateTypeOffered;
                        _tblLoanMaster.FrequencyOffered = _objLoanMasterDetails.FrequencyOffered;
                        _tblLoanMaster.LoanValueRatio = _objLoanMasterDetails.LoanValueRatio;
                        _tblLoanMaster.LoanAmountOffered = _objLoanMasterDetails.LoanAmountOffered;
                        _tblLoanMaster.EMIStartDay = _objLoanMasterDetails.EMIStartDay;
                        _tblLoanMaster.EMIStartMonth = _objLoanMasterDetails.EMIStartMonth;
                        _tblLoanMaster.LoanProcessingFee = _objLoanMasterDetails.LoanProcessingFee;
                        _tblLoanMaster.AnyLegalCharges = _objLoanMasterDetails.AnyLegalCharges;
                        _tblLoanMaster.NoOfEMI = _objLoanMasterDetails.NoOfEMI;
                        _tblLoanMaster.Loanprovider = _objLoanMasterDetails.Loanprovider;
                        _tblLoanMaster.PropertyCost = _objLoanMasterDetails.PropertyCost;
                        _tblLoanMaster.FinanceDate = _objLoanMasterDetails.FinanceDate;
                        _tblLoanMaster.SettlementDate = _objLoanMasterDetails.SettlementDate;
                        _tblLoanMaster.CreatedOn = DateTime.Now;

                        db.tblLoanMasters.Add(_tblLoanMaster);
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

        public List<LoanMasterDetails> GetDataFromLoanApp(int AutoId) {

            try
            {                
                using (AIMFinServDBEntities db = new AIMFinServDBEntities())
                {
                    Guid LoanAppNo = db.tblLoanApplicationForms.Where(x => x.AutoID == AutoId).Select(x=> x.LoanApplicationNo).FirstOrDefault();
                    var datafromloanapp = (from tla in db.tblLoanApplicationForms
                                           join tlr in db.tblMasterLoanRateTypes on tla.RateTypeID equals tlr.ID
                                               where tla.LoanApplicationNo == LoanAppNo
                                               select new
                                               {
                                                   _AutoId = tla.AutoID,
                                                   _ApplicationFormNumber = tla.ApplicationFormNumber,
                                                   _LoanTerm = tla.LoanTerm,
                                                   _Frequency = tla.Frequency,
                                                   _StatusID = tla.StatusID,
                                                   _PropertyTypeID = tla.PropertyTypeID,
                                                   _FinanceDate = tla.FinanceDate,
                                                   _CostOfProperty = tla.CostOfProperty,
                                                   _TypeOfLoanID = tla.TypeOfLoanID,
                                                   _LoanRateType = tlr.LoanRateType
                                               }).ToList().Select(x => new LoanMasterDetails()
                                               {
                                                   AutoID=x._AutoId,
                                                   ApplicationFormNumber = x._ApplicationFormNumber,
                                                   LoanTermOffered = x._LoanTerm,
                                                   FrequencyOffered = x._Frequency,
                                                   StatusID = x._StatusID,
                                                   PropertyTypeID = x._PropertyTypeID,
                                                   FinanceDate = x._FinanceDate,
                                                   PropertyCost = x._CostOfProperty,
                                                   LoanTypeID = x._TypeOfLoanID,
                                                   RateTypeOffered = x._LoanRateType
                                               }).ToList();
                        
                    return datafromloanapp;
                }
            }

            catch (Exception ex)
            {
                return null;
            }
        }
    }

}
