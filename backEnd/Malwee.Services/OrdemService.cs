using System;
using Malwee.Domain.Model;
using Malwee.Domain.ViewModel;
using Malwee.Repositories.Contracts;
using Malwee.Services.Contracts;
using System.Linq;
using System.Collections.Generic;
using System.Globalization;

namespace Malwee.Services
{
    public class OrdemService : IOrdemService
    {
        private readonly IOrdemRepository orderRepo;
        private readonly IClienteService cliService;
        private readonly IFornecedorService fornService;
        public OrdemService(IOrdemRepository pOrderRepo ,
            IClienteService pCliService, IFornecedorService pFornService)
        {
            orderRepo = pOrderRepo;
            cliService = pCliService;
            fornService = pFornService;
        }

        public FornecedorPrecoServicoReport fornecedorPrecoMedio()
        {
            try
            {
                IList<Servicos> servicos = new List<Servicos>();
                var ordensAno = orderRepo.findByYear();
                FornecedorPrecoServicoReport fornGastoMedio = new FornecedorPrecoServicoReport();
                foreach(var serv in Enum.GetNames(typeof(EnumTipoServico)))
                {
                    IList<FornecedorValorMedio> valorMedio = new List<FornecedorValorMedio>();
                     valorMedio = ordensAno
                               .GroupBy(r => new { r.TipoServico, r.Fornecedor })
                               .Where(r=>r.Key.TipoServico == (EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), serv))
                               .Select(cl => new FornecedorValorMedio
                               {
                                   Nome = cl.Key.Fornecedor.Nome,
                                   ValorMedio = cl.Average(c => c.Valor)
                               }).OrderByDescending(r => r.ValorMedio).ToList();
                    var servico = new Servicos()
                    {
                        Nome = serv,
                        Fornecedores = valorMedio
                    };
                    servicos.Add(servico);
                }
                fornGastoMedio.Servicos = servicos;

                return fornGastoMedio;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public FornecedorSemAtendimentoReport fornecedorSemAtendimento()
        {
            try
            {
                var ordensAno = orderRepo.findByYear()
                                .GroupBy(r => new { r.DataAtendimento.Month, r.FornecedorForeignKey });
                
                var fornecedores = fornService.getAll();
                string[] meses = DateTimeFormatInfo.CurrentInfo.MonthNames;
                FornecedorSemAtendimentoReport fornecedor = new FornecedorSemAtendimentoReport();
                fornecedor.MesesAno = populaMeses(meses);
              //  fornecedor.Fornecedores = new List<FornecedorSemAtendimento>();
                foreach(var mes in fornecedor.MesesAno)
                {
                    mes.Fornecedores = new List<FornecedorSemAtendimento>();
                      var lst = from f in fornecedores
                              join o in ordensAno.ToList()
                              on f.Id equals o.Key.FornecedorForeignKey
                              into juncao
                              from j in juncao.Where(r=>r.Key.Month==mes.NumMes)
                              select f;

                    var result = fornecedores.Where(p => lst.All(p2 => p2.Id != p.Id));
                    foreach(var forn in result)
                    {
                        mes.Fornecedores.Add(new FornecedorSemAtendimento()
                        {
                            IdFornecedor = forn.Id,
                            Mes = mes.Nome,
                            Nome = forn.Nome
                        });
                    }
                }


                return fornecedor;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public ClientesGastoMesReport getGastoMes()
        {
            try
            {
                var ordensAno = orderRepo.findByYear();
                string[] meses = DateTimeFormatInfo.CurrentInfo.MonthNames;
                ClientesGastoMesReport clientesGasto = new ClientesGastoMesReport();
                clientesGasto.ClienteMes = new List<MesesAno>();
                populaMesAnoClienteGasto(clientesGasto, meses);
                setValoresClienteMesGasto(clientesGasto, ordensAno);             
              
                return clientesGasto;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        private void setValoresClienteMesGasto(ClientesGastoMesReport clientesGasto, IList<Ordem> ordensAno)
        {
            
            foreach(var mes in clientesGasto.ClienteMes)
            {
                mes.Clientes = ordensAno
                              .GroupBy(r => new { r.DataAtendimento.Month, r.Cliente })
                              .Where(r => r.Key.Month == mes.NumMes)
                              .Select(cl => new ClienteGasto
                              {
                                  Mes = DateTimeFormatInfo.CurrentInfo.GetMonthName(cl.Key.Month),
                                  Nome = cl.Key.Cliente.Nome,
                                  ValorTotal = cl.Sum(c => c.Valor)
                              }).OrderByDescending(r => r.ValorTotal).Take(3).ToList();
            }
            
          
        }

        public OrdemLista getOrdensPesquisa(OrdemPesquisa ordem)
        {
            try
            {
                var lista = new OrdemLista();
                lista.ordens = new List<OrdemResponse>();
                var ordens = orderRepo.getPesquisa(ordem);

                lista.ordens = (from o in ordens
                                select new OrdemResponse()
                                {
                                    Bairro = o.Bairro,
                                    Uf = o.Estado,
                                    Cidade = o.Cidade,
                                    Cliente = o.Cliente.Nome,
                                    Data = o.DataAtendimento,
                                    Id = o.Id,
                                    Tipo = o.TipoServico.ToString(),
                                    Valor = o.Valor
                                }).ToList();



                return lista;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void insert(OrdemInsert ordem)
        {
            try
            {
                var cliente = cliService.getById(ordem.IdCliente);
                if (cliente != null)
                {
                    var newOrdem = new Ordem()
                    {
                        DataAtendimento = ordem.Data,
                        Descricao = ordem.Descricao,
                        TipoServico = (EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), ordem.Tipo.ToString()),
                        Valor = ordem.Valor,
                        ClienteForeignKey = ordem.IdCliente,
                        Bairro = cliente.Bairro,
                        Estado = cliente.Estado,
                        Cidade = cliente.Cidade,
                        FornecedorForeignKey = ordem.IdFornecedor
                    };

                    orderRepo.insert(newOrdem);
                }
                else
                {
                    throw new Exception();
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        private IList<Mes> populaMeses(string[] meses)
        {
            int count = 1;
            IList<Mes> lista = new List<Mes>();
            foreach (var mes in meses)
            {
                if (!string.IsNullOrEmpty(mes))
                {
                    lista.Add(new Mes() { Nome = mes, NumMes = count });
                    count++;
                }
            }
            return lista;
        }
        private void populaMesAnoClienteGasto(ClientesGastoMesReport clientesGasto, string[] meses)
        {
            int count = 1;
            foreach (var mes in meses)
            {
                if (!string.IsNullOrEmpty(mes))
                {
                    clientesGasto.ClienteMes.Add(new MesesAno() { Nome = mes, NumMes = count });
                    count++;
                }
            }
        }
    }
}
