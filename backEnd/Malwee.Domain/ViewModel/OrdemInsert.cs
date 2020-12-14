using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Domain.ViewModel
{
    public class OrdemInsert
    {
        public int IdFornecedor { get; set; }
        public DateTime Data { get; set; }

        public int IdCliente { get; set; }

        public int Tipo { get; set; }

        public decimal Valor { get; set; }

        public string Descricao { get; set; }


    }
}
