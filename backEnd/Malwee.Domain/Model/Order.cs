using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Domain.Model
{
    public class Order
    {
        public int Id { get; set; }

        public DateTime Atendimento { get; set; }

        public decimal Valor { get; set; }

        public EnumTipoServico Tipo { get; set; }

        public string Descricao { get; set; }
    }
}
