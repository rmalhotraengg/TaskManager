using TaskManagement.Application.DTO;

namespace TaskManagement.Application.ServiceContracts
{
    public interface ITaskAdderService
    {
        Task<TaskResponse> Add(TaskRequest request);
    }
}
