using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Malwee.Domain.Model
{
    [Table("Cliente")]
    public class Cliente
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Bairro { get; set; }

        public string Cidade { get; set; }

        public String Estado { get; set; }

        public List<Ordem> Ordens { get; set; }
    }
}
