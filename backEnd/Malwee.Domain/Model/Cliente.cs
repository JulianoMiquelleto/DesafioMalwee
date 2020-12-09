using System;
using System.Collections.Generic;
using System.Text;

namespace Malwee.Domain.Model
{
    public class Cliente
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Bairro { get; set; }

        public string Cidade { get; set; }

        public String Estado { get; set; }
    }
}
