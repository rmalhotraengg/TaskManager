using TaskManagement.Application.DTO;
using TaskManagement.Application.ServiceContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;

namespace TaskManagement.Application.Services
{
    public class TaskUpdaterService : ITaskUpdaterService
    {
        private IUnitOfWork _unitOfWork;
        public TaskUpdaterService(IUnitOfWork unitOfWork)=>_unitOfWork = unitOfWork;
        public async Task<TaskResponse> Update(TaskRequest request)
        {
            var task=request.ToTask();
            _unitOfWork.TaskRepository.Update(task);
            await _unitOfWork.Complete();
            return task.ToTaskResponse();
             
        }
    }
}
