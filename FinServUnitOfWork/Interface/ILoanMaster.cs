﻿using System;
using System.Collections.Generic;
using FinServBussinessEntities;

    namespace FinServUnitOfWork.Interface
{
    public interface ILoanMaster
    {        
        List<LoanMasterDetails> GetAllLoanMasterDetails();
        LoanMasterDetails GetLoanMasterDetails(string LoanAppNo);
        bool UpdateLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails);

        bool AddLoanMasterDetails(LoanMasterDetails _objLoanMasterDetails);
        List<LoanMasterDetails> GetDataFromLoanApp(int AutoId);
    }
}
