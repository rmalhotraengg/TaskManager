namespace TaskManagement.Domain.RepositoryContracts
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T?>> GetAll();
        Task<T?> Get(int Id);
        Task Add(T entity);
        T Update(T entity);
        void Delete(int Id);
    }
}
