using Malwee.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace Malwee.Repositories.context
{

    public class OrdemContext : DbContext
    {
        public DbSet<Ordem> Ordens { get; set; }
        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Fornecedor> Fornecedores{ get; set; }
        public OrdemContext(DbContextOptions<OrdemContext> options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Ordem>()
               .HasOne(p => p.Cliente)
               .WithMany(b => b.Ordens)
               .HasForeignKey(p => p.ClienteForeignKey);

            modelBuilder.Entity<Ordem>()
               .HasOne(p => p.Fornecedor)
               .WithMany(b => b.Ordens)
               .HasForeignKey(p => p.FornecedorForeignKey);

            modelBuilder
            .Entity<Ordem>()
            .Property(e => e.TipoServico)
            .HasConversion(
                v => v.ToString(),
                v => (EnumTipoServico)Enum.Parse(typeof(EnumTipoServico), v));

        }
    }
}