﻿using Malwee.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Repositories.Contracts
{
    public interface IClienteRepository
    {
        IList<Cliente> getAll();
    }
}
