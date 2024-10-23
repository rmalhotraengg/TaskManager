using Task = TaskManagement.Domain.Entities.Task;

namespace TaskManagement.Domain.RepositoryContracts
{
    public interface ITaskRepository:IGenericRepository<Task>
    {
        Task<IEnumerable<Task?>> GetByCaseAsync(int caseId);

    }
}
