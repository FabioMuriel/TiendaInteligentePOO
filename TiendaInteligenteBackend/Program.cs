using Microsoft.EntityFrameworkCore;
using TiendaInteligenteBackend.Application.UsesCases;
using TiendaInteligenteBackend.Domain.Interfaces;
using TiendaInteligenteBackend.Infrastructure.Repository;
using TiendaInteligenteBackend.Infrastructure.Context;
using AppContext = TiendaInteligenteBackend.Infrastructure.Context.AppContext;

class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Configuración de servicios
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // Configuración de la base de datos en memoria
        builder.Services.AddDbContext<AppContext>(options =>
        {
            options.UseInMemoryDatabase("TiendaInteligenteDB"); // Nombre de la base de datos en memoria
        });

        // Registro de repositorios y casos de uso
        builder.Services.AddScoped<IUserRepository, UserRepository>();
        builder.Services.AddScoped<IUserUsesCases, UserUseCase>();

        builder.Services.AddControllers();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.MapControllers();
        app.Run();
    }
}