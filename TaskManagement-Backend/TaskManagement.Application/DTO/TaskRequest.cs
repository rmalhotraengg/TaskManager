using System.ComponentModel.DataAnnotations;
using Task = TaskManagement.Domain.Entities.Task;

namespace TaskManagement.Application.DTO
{
    public class TaskRequest
    { 
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
        public DateTime? DueDate { get; set; }
        public int CaseId { get; set; }


        public Task ToTask()
        {
            return new Task()
            {
                Id =  Id,
                Description = Description,
                Status = Status,
                DueDate = DueDate,
                Name = Name,
                CaseId = CaseId

            };
        }
    }
}
