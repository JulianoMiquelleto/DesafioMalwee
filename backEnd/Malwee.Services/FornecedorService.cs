using Malwee.Domain.ViewModel;
using Malwee.Repositories.Contracts;
using Malwee.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Services
{
    public class FornecedorService : IFornecedorService
    {

        private readonly IFornecedorRepository fornecedorRepository;
        public FornecedorService(IFornecedorRepository pfornecedorRepository)
        {
            fornecedorRepository = pfornecedorRepository;
        }

        public IList<Domain.Model.Fornecedor> getAll()
        {
            return fornecedorRepository.getAll();
        }

        public FornecedorResponse getByUser(string userName)
        {
            var fornecedor = fornecedorRepository.getByUserName(userName);

            if (fornecedor != null)
            {
                return new FornecedorResponse() { Id = fornecedor.Id, Nome = fornecedor.Nome };
            }
            return null;

        }
    }
}
