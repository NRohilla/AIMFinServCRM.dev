using System.Collections.Generic;
using FinServBussinessEntities;
using FinServDataModel;


    namespace FinServUnitOfWork.Interface
{
    public interface ILoanMaster
    {        
        List<LoanMasterDetails> GetAllLoanMasterDetails();
        LoanMasterDetails GetLoanMasterDetails(string LoanAppNo);
    }
}
