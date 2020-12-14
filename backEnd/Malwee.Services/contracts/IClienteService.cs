
using System;
using System.Collections.Generic;
using System.Text;
using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;

namespace Malwee.Services.Contracts
{
    public interface IClienteService
    {
        IList<ClienteResponse> getAll();

        Cliente getById(int id);
    }
}
