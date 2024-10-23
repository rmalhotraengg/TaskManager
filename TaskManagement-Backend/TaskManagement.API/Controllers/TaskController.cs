using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagement.Application.DTO;
using TaskManagement.Application.ServiceContracts;

namespace TaskManagement.API.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private ITaskAdderService _taskAdderService;
        private ITaskDeleterService _taskDeleterService;
        private ITaskGetterService _taskGetterService;
        private ITaskUpdaterService _taskUpdaterService;
        public TaskController(
        ITaskAdderService taskAdderService,
        ITaskDeleterService taskDeleterService,
        ITaskGetterService taskGetterService,
        ITaskUpdaterService taskUpdaterService)
        {
            _taskAdderService = taskAdderService;
            _taskDeleterService = taskDeleterService;
            _taskGetterService = taskGetterService;
            _taskUpdaterService = taskUpdaterService;
        }
        [HttpGet("case/{CaseId}")]
        public async Task<ActionResult<IEnumerable<TaskResponse>>> GetAll(int CaseId)
        {
            var taskList = await _taskGetterService.GetAll(CaseId);
            return taskList;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<TaskResponse>> Get(int Id)
        {
            var task = await _taskGetterService.Get(Id);
            if (task == null)//return not found if not exists
            {
                return NotFound();
            }
            return task;
        }

        [HttpPut("{Id}")]
        public async Task<ActionResult<TaskResponse>> Put(TaskRequest task, int Id)
        {
            if (Id != task.Id)// check if id is equal to task.id else bad request
            {
                return BadRequest();
            }
            var taskObj = _taskGetterService.Get(Id);
            if (taskObj == null) //check if id exists
            {
                return NotFound();
            }
            //_taskGetterService.Entry(taskObj).State = EntityState.Detached;
            var result = await _taskUpdaterService.Update(task);
            return result;
        }

        [HttpPost]
        public async Task<ActionResult<TaskResponse>> Post(TaskRequest task)
        {
            if (task == null)// check if task is not null else bad request
            {
                return BadRequest();
            }
            var taskObj = _taskGetterService.Get(task.Id);
            if (taskObj == null)//Not found
            {
                return NotFound();
            }
            var result = await _taskAdderService.Add(task);
            return result;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            //Not found
            await _taskDeleterService.Delete(id);
            return NoContent();
        }
    }
}
