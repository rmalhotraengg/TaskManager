namespace TaskManagement.Domain.RepositoryContracts.UoW
{
    public interface IUnitOfWork
    {
        ITaskRepository TaskRepository { get;  }
        Task Complete();
    }
}
