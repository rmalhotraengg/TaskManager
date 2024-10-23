using Microsoft.EntityFrameworkCore;
using TaskManagement.Application.ServiceContracts;
using TaskManagement.Application.Services;
using TaskManagement.Core.Domain.UoW;
using TaskManagement.Domain.RepositoryContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;
using TaskManagement.Infrastructure.ApplicationDbContext;
using TaskManagement.Infrastructure.Repositories;

namespace TaskManagement.API.StartUpServiceExtensions
{
    public static class ServicesCollection
    {
        public static IServiceCollection AddServices(this WebApplicationBuilder builder)
        {
            var services = builder.Services;

            services.AddDbContext<CRUDDbContext>(options =>
            {
                options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddScoped<IUnitOfWork,UnitOfWork>();

            services.AddScoped<ITaskRepository, TaskRepository>();

            services.AddScoped<ITaskAdderService, TaskAdderService>();

            services.AddScoped<ITaskDeleterService, TaskDeleterService>();

            services.AddScoped<ITaskGetterService, TaskGetterService>();

            services.AddScoped<ITaskUpdaterService, TaskUpdaterService>();

            return services;
        }
    }
}
