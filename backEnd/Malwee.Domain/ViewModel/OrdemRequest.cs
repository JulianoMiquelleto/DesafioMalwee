using Malwee.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Malwee.Domain.ViewModel
{
    public class OrdemRequest
    {
        public EnumTipoServico Tipo { get; set; }
        public decimal Preco { get; set; }
        public DateTime Data { get; set; }
        public string Descricao { get; set; }
    }
}
