using System;
using System.Collections.Generic;
using System.Linq;
using Malwee.Domain.Model;
using Malwee.Repositories.context;
using Malwee.Repositories.Contracts;


namespace Malwee.Repositories
{
    public class FornecedorRepository:IFornecedorRepository
    {
        private readonly OrdemContext context;
        public FornecedorRepository(OrdemContext ppcontext)
        {
            context = ppcontext;
        }

        public IList<Fornecedor> getAll()
        {
            return context.Fornecedores.ToList();
        }

        public Fornecedor getByUserName(string userName)
        {
            return context.Fornecedores.FirstOrDefault(r => r.Usuario == userName);
        }
    }
}
