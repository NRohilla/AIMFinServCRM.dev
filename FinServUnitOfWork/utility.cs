using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServUnitOfWork
{
    public class utility
    {
        public string[] letters { get; set; }

        public utility()
        {
            string[] items = { "d", "e", "f", "g", "h", "a", "b", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "c" };
            this.letters = items;
        }
    }
}
