using TaskManagement.Application.DTO;

namespace TaskManagement.Application.ServiceContracts
{
    public interface ITaskUpdaterService
    {
        Task<TaskResponse> Update(TaskRequest request);
    }
}
