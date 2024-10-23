using TaskManagement.Domain.RepositoryContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;
using TaskManagement.Infrastructure.ApplicationDbContext;
using TaskManagement.Infrastructure.Repositories;

namespace TaskManagement.Core.Domain.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        protected CRUDDbContext _dbContext;
        public ITaskRepository _taskRepository;

        ITaskRepository IUnitOfWork.TaskRepository { get => _taskRepository; }

        public UnitOfWork(CRUDDbContext context) { 
            _dbContext = context;
            _taskRepository = new TaskRepository(_dbContext); 
        }

       
        public async Task Complete()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
