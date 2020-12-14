using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Malwee.Domain.Model
{
    [Table("Ordens")]
    public class Ordem
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        public DateTime DataAtendimento { get; set; }

        public decimal Valor { get; set; }

        public EnumTipoServico TipoServico { get; set; }

        public string Descricao { get; set; }

        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }

        public int FornecedorForeignKey { get; set; }
        public Fornecedor Fornecedor { get; set; }
        public int ClienteForeignKey { get; set; }
        [ForeignKey("ClienteForeignKey")]
        public Cliente Cliente { get; set; }
    }
}
