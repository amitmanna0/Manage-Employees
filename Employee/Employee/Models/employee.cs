using System.ComponentModel.DataAnnotations;

namespace Employee.Models
{
    public class employee
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string? Name { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Address { get; set; }
        [Required]
        public int Phone { get; set; }
    }
}
