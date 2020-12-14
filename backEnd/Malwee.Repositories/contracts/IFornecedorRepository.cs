using Malwee.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Repositories.Contracts
{
    public interface IFornecedorRepository
    {
        Fornecedor getByUserName(string userName);

        IList<Fornecedor> getAll();
    }
}
