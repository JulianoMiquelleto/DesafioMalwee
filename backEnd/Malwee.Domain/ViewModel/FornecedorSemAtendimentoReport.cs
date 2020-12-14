using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Malwee.Domain.ViewModel
{
    public class FornecedorSemAtendimentoReport
    {
        public IList<Mes> MesesAno { get; set; }
    }
}

public class Mes
{
    public int NumMes { get; set; }
    public string Nome { get; set; }

    public IList<FornecedorSemAtendimento> Fornecedores { get; set; }
}

public class FornecedorSemAtendimento
{
    public string Nome { get; set; }
    public string Mes { get; set; }

    public int IdFornecedor { get; set; }
}
