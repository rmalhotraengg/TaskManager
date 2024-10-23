using TaskManagement.Application.ServiceContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;

namespace TaskManagement.Application.Services
{
    public class TaskDeleterService : ITaskDeleterService
    { 
        private IUnitOfWork _unitOfWork;
        public TaskDeleterService(IUnitOfWork unitOfWork)=> _unitOfWork=unitOfWork;
        public async Task<bool> Delete(int Id)
        { 
            _unitOfWork.TaskRepository.Delete(Id);
            await _unitOfWork.Complete();
            return true;
        }
    }
}
