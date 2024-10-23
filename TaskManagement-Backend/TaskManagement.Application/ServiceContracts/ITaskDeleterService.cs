namespace TaskManagement.Application.ServiceContracts
{
    public interface ITaskDeleterService
    { 
        Task<bool> Delete(int Id);
    }
}
