using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Malwee.Domain.ViewModel
{
    public class OrdemResponse
    {
        public int Id { get; set; }
        public DateTime Data { get; set; }

        public String Cliente { get; set; }

        public string Cidade { get; set; }

        public string Bairro { get; set; }

        public string Uf { get; set; }

        public string Tipo { get; set; }

        public decimal Valor { get; set; }

    }
}
