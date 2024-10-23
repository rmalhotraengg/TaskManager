using System.ComponentModel.DataAnnotations;

using Task = TaskManagement.Domain.Entities.Task;

namespace TaskManagement.Application.DTO
{
    public class TaskResponse
    { 
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
        public DateTime? DueDate { get; set; }
        public int? CaseId { get; set; }
    }

    public static class TaskExtensions
    {
    public static TaskResponse ToTaskResponse(this Task task)
    {
            return
                new TaskResponse
                {
                    Id = task.Id,
                    Description = task.Description,
                    Status = task.Status,
                    DueDate = task.DueDate,
                    Name = task.Name,
                    CaseId=task.CaseId,
                };
            
    }

    }
}
