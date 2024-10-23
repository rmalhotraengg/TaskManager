using TaskManagement.Application.DTO;
using TaskManagement.Application.ServiceContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;

namespace TaskManagement.Application.Services
{
    public class TaskAdderService : ITaskAdderService
    {
        IUnitOfWork _uow;
        public TaskAdderService(IUnitOfWork uow) { 
        _uow = uow;
        }
        public async Task<TaskResponse> Add(TaskRequest request)
        {
            var task = request.ToTask();
            //task.Id = new Guid();
            await _uow.TaskRepository.Add(task);
            await _uow.Complete();
            return task.ToTaskResponse();
            
        }
    }
}
