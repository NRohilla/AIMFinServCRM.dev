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
                            LANNumber=item.LANNumber,
                            LoanApplicationNo = item.LoanApplicationNo,
                            LoanAmountOffered = item.LoanAmountOffered,
                            ROIOffered = item.ROIOffered,
                            RateTypeOffered=item.RateTypeOffered,
                            LoanTermOffered = item.LoanTermOffered,
                            FrequencyOffered = item.FrequencyOffered,
                            PropertyTypeID = item.PropertyTypeID,
                            LoanTypeID = item.LoanTypeID,
                            FinanceDate = item.FinanceDate,
                            ClientID = item.ClientID,
                            StatusID=item.StatusID,
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
    }
}
