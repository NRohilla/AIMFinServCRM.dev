using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class ExpenseTypeMaster
    {
        public int AutoID { get; set; }
        public System.Guid ExpenseTypeID { get; set; }
        public string Description { get; set; }
        public string Frequency { get; set; }
        public bool IsActive { get; set; }
    }
}
