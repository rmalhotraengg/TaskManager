using Microsoft.EntityFrameworkCore;
using System.Xml;
using TaskManagement.Domain.Entities;
using Task = TaskManagement.Domain.Entities.Task;

namespace TaskManagement.Infrastructure.ApplicationDbContext
{
    public class CRUDDbContext : DbContext
    {
        public CRUDDbContext(DbContextOptions options):base(options) { 
        
        } 
        public DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Task>(entity =>
            {
                entity.HasKey(e => e.Id);  // Configure primary key
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Description).HasMaxLength(500);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(100);
                entity.Property(e => e.DueDate).IsRequired(false); 
                // Optional: Set a default value for Status if needed
                entity.Property(e => e.Status).HasDefaultValue("Pending");
                entity.Property(e => e.CaseId).IsRequired();
                entity.HasData(
                new Task
                {
                    Id = 1,
                    Name = "Finish report",
                    DueDate = DateTime.Now.AddDays(5),
                    Description = "Schedule a meeting with the team for next week.",
                    Status = "pending",
                    CaseId = 1,
                });
            });
             
        }
    }
}
