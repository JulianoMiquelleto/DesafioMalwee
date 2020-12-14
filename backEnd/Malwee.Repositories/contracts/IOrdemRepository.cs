using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Repositories.Contracts
{
    public interface IOrdemRepository
    {
        void insert(Ordem ordem);

        IList<Ordem> getPesquisa(OrdemPesquisa ordem);

        IList<Ordem> findByYear();
    }
}
