using System;
using System.Collections.Generic;
using System.Linq;
using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;
using Malwee.Repositories.context;
using Malwee.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Malwee.Repositories
{
    public class OrdemRepository : IOrdemRepository
    {
        private readonly OrdemContext context;
        public OrdemRepository(OrdemContext ppcontext)
        {
            context = ppcontext;
        }

        public IList<Ordem> getPesquisa(OrdemPesquisa ordem)
        {

            return (from o in context.Ordens.Include(cl=>cl.Cliente).Include(f=>f.Fornecedor).
                    Where(r =>
                    r.Estado.Contains(ordem.Uf??"") &&
                    r.Bairro.Contains(ordem.Bairro ?? "") &&
                    r.Cidade.Contains(ordem.Cidade ?? "") &&
                    r.Cliente.Nome.Contains(ordem.Cliente ?? "") &&
                    // r.FornecedorForeignKey == ordem.IdFornecedor &&
                    //(int)r.TipoServico >=   (ordem.tipo.HasValue? (int)(EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), ordem.tipo.ToString()) 
                    //:0) &&  (int)r.TipoServico <= (ordem.tipo.HasValue ? (int)(EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), ordem.tipo.ToString())
                    //: 9999) &&
                   // (ordem.tipo !=null || r.TipoServico == (EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), ordem.tipo.ToString())) &&

                   (r.Valor >=(ordem.ValorMinimo?? 0) && r.Valor <= (ordem.ValorMaximo?? int.MaxValue)  )  &&
                   (r.DataAtendimento >= (ordem.DataInicio?? DateTime.MinValue) && 
                   r.DataAtendimento<= (ordem.DataFim?? DateTime.MaxValue)      ))
                    select o).ToList();
        }

        public void insert(Ordem ordem)
        {
            try
            {
                context.Ordens.Add(ordem);
                context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        IList<Ordem> IOrdemRepository.findByYear()
        {
            return context.Ordens
                .Include(cl => cl.Cliente)
                .Include(fo => fo.Fornecedor)
                .Where(r => r.DataAtendimento.Year == DateTime.Now.Year).ToList();
        }
    }
}
