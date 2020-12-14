using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Services.Contracts
{
    public interface IFornecedorService
    {
        FornecedorResponse getByUser(string userName);

        IList<Fornecedor> getAll();
    }
}
