using Microsoft.EntityFrameworkCore;
using TaskManagement.API.StartUpServiceExtensions;
using TaskManagement.Infrastructure.ApplicationDbContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader());
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.AddServices();

var app = builder.Build();

app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<CRUDDbContext>();
//    dbContext.Database.Migrate(); // This applies migrations and seeds data from HasData
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
