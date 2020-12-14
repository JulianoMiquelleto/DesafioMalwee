using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Malwee.Domain.Model
{
    [Table("Fornecedor")]
    public class Fornecedor
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Usuario { get; set; }

        public List<Ordem> Ordens { get; set; }
    }
}
