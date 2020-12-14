using Malwee.Domain.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Services.Contracts
{
    public interface IOrdemService
    {
        OrdemLista getOrdensPesquisa(OrdemPesquisa ordem);

        void insert(OrdemInsert ordem);
        ClientesGastoMesReport getGastoMes();

        FornecedorPrecoServicoReport fornecedorPrecoMedio();

        FornecedorSemAtendimentoReport fornecedorSemAtendimento();
    }
}
