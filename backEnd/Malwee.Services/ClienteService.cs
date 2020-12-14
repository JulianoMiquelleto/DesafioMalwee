using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;
using Malwee.Repositories.Contracts;
using Malwee.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Malwee.Services
{
    public class ClienteService : IClienteService
    {
        private readonly IClienteRepository clienteRepository;
        public ClienteService(IClienteRepository pclienteRepository)
        {
            clienteRepository = pclienteRepository;
        }
        public IList<ClienteResponse> getAll()
        {
            try
            {
                var clientes = clienteRepository.getAll();

                return (from o in clientes
                        select new ClienteResponse()
                        {
                            Id = o.Id,
                            Nome = o.Nome
                        }).OrderBy(r => r.Nome).ToList();
            }
            catch(Exception ex)
            {
                throw ex;
            }

        }

        public Cliente getById(int id)
        {
            return clienteRepository.getAll().FirstOrDefault(r => r.Id == id);
        }
    }
}
