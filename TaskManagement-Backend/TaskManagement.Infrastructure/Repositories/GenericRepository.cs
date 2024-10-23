using Microsoft.EntityFrameworkCore;
using TaskManagement.Domain.Entities;
using TaskManagement.Domain.RepositoryContracts;
using TaskManagement.Infrastructure.ApplicationDbContext;
using Task = System.Threading.Tasks.Task;
namespace TaskManagement.Infrastructure.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private CRUDDbContext _context;
        public GenericRepository(CRUDDbContext context) { 
        _context = context;
        }
        public async Task  Add(T entity)
        {
            await _context.AddAsync(entity);
        }

        public void Delete(int Id)
        {
            var entity= _context.Set<T>().FirstOrDefaultAsync(x=>x.Id==Id);
            if(entity!=null)
            {
                _context.Remove(entity.Result);
            }
        }

        public async Task<T?>Get(int Id)
        {
          var result=await _context.Set<T>().FirstOrDefaultAsync(x=>x.Id==Id);
          _context.Entry(result).State = EntityState.Detached;
          return result;
        }

        public async Task<IEnumerable<T?>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public T  Update(T entity)
        {
            _context.Set<T>().Update(entity);
            return entity;
        }
    }
}
