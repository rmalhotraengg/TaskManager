using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Domain.Entities
{
    public class Task : BaseEntity
    {

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name length should not exceed more than 100 characters."),]
        public string? Name { get; set; }

        [StringLength(500, ErrorMessage = "Description length should not exceed more than 500 characters."),]
        public string? Description { get; set; }
        public DateTime? DueDate { get; set; }
        public string? Status { get; set; }

        [Required]
        public int? CaseId { get; set; }
    }
}
