using Microsoft.EntityFrameworkCore;
using TiendaInteligenteBackend.Domain.Entities; // Asegúrate de tener tus entidades definidas aquí

namespace TiendaInteligenteBackend.Infrastructure.Context;

public class AppContext : DbContext
{
    public AppContext(DbContextOptions<AppContext> options) : base(options)
    {
    }

    // Define tus DbSet para cada entidad
    public DbSet<UserEntity> Users { get; set; } // Ejemplo: DbSet para la entidad User

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuraciones adicionales del modelo (opcional)
        base.OnModelCreating(modelBuilder);
    }
    
}