using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class RelationshipTypeMaster
    {
        public int ID { get; set; }
        public string RelationshipWithApplicant { get; set; }
        public bool IsActive { get; set; }
    }
}
