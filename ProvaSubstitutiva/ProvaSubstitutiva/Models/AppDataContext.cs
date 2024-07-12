using Microsoft.EntityFrameworkCore;
using ProvaSubstitutiva.Models;

namespace Diogo.Models;

public class AppDataContext : DbContext
{
    public DbSet<Aluno> Alunos { get; set; }
    public DbSet<Imc> Imcs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=lucas_prova.db");
    }
}
