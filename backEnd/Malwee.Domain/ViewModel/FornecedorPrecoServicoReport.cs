using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Malwee.Domain.ViewModel
{
    public class FornecedorPrecoServicoReport
    {
        public IList<Servicos> Servicos { get; set; }
    }
}

public class Servicos {

    public string Nome { get; set; }

    public IList<FornecedorValorMedio> Fornecedores { get; set; }
}


public class FornecedorValorMedio
{
    public string Nome { get; set; }
    public decimal ValorMedio { get; set; }
}
