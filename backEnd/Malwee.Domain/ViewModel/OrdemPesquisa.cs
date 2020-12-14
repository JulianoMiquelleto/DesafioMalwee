using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Domain.ViewModel
{
    public class OrdemPesquisa
    {
        public int IdFornecedor { get; set; }
        public DateTime? DataInicio { get; set; }

        public DateTime? DataFim { get; set; }

        public String Cliente { get; set; }

        public string Cidade { get; set; }

        public string Bairro { get; set; }

        public string Uf { get; set; }

        public int? tipo { get; set; }

        public decimal? ValorMinimo { get; set; }

        public decimal? ValorMaximo { get; set; }


    }
}
