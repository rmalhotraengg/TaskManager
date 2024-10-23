using System.ComponentModel.DataAnnotations;

namespace TaskManagement.Domain.Entities
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime ModifiedDate{ get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
