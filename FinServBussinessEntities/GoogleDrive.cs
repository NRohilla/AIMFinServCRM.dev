using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServBussinessEntities
{
    public class GoogleDrive
    {
        public System.Guid ApplicantID { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public long? Size { get; set; }
        public long? Version { get; set; }
        public DateTime? CreateTime { get; set; }
        public string Location { get; set; }
    }
}
