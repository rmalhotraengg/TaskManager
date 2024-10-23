using Microsoft.EntityFrameworkCore;
using TaskManagement.Domain.RepositoryContracts;
using TaskManagement.Infrastructure.ApplicationDbContext;
using Task = TaskManagement.Domain.Entities.Task;

namespace TaskManagement.Infrastructure.Repositories
{
    public class TaskRepository : GenericRepository<Task>, ITaskRepository
    {
        private readonly CRUDDbContext _context;
        public TaskRepository(CRUDDbContext context):base(context) { 
        
            _context=context;
        }
         

        public async Task<IEnumerable<Task?>> GetByCaseAsync(int caseId)
        {

            return await _context.Set<Task>().AsNoTracking().Where(x=>x.CaseId==caseId).ToListAsync();
        }
    }
}
