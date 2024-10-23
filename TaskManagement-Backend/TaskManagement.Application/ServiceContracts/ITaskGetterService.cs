using TaskManagement.Application.DTO;

namespace TaskManagement.Application.ServiceContracts
{
    public interface ITaskGetterService
    {
      Task<TaskResponse> Get(int Id);
      Task<List< TaskResponse>> GetAll(int CaseId);
    }
}
