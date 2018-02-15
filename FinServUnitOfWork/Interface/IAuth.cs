﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinServUnitOfWork.Interface
{
    public interface IAuthenticate
    {
        List<KeyValuePair<Guid, string>> AuthenticateLogin(string UserEmailId, string password);
    }
}