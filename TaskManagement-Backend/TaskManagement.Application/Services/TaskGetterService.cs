using TaskManagement.Application.DTO;
using TaskManagement.Application.ServiceContracts;
using TaskManagement.Domain.RepositoryContracts.UoW;

namespace TaskManagement.Application.Services
{
    public class TaskGetterService : ITaskGetterService
    {
        private  IUnitOfWork _uow;
        public TaskGetterService(IUnitOfWork uow) =>_uow = uow;
        public async Task<TaskResponse> Get(int Id)
        {
           var task= await _uow.TaskRepository.Get(Id);
            if(task == null) { return null; }
           return task.ToTaskResponse();
        }

        public async Task<List<TaskResponse>> GetAll(int CaseId)
        {
           var tasks=await _uow.TaskRepository.GetByCaseAsync(CaseId);
           return (tasks.Select(task=>task.ToTaskResponse())).ToList();
        }
    }
}
