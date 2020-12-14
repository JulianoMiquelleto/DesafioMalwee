using Malwee.Domain.Model;
using Malwee.Repositories.context;
using Malwee.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Malwee.Repositories
{

    public class ClienteRepository : IClienteRepository
    {
        private readonly OrdemContext context;
        public ClienteRepository(OrdemContext pcontext)
        {
            context = pcontext;
        }

        public IList<Cliente> getAll()
        {
            try
            {
                return context.Clientes.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
