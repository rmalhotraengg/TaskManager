import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Nav, Stack,Fade,Collapse } from 'react-bootstrap';
import { Cases } from './components/case/cases';
import { Tasks } from './components/task/tasks';
import { TaskForm } from './components/task/taskForm';
import { useState } from 'react';


function App() { 

  const [openTasks, setOpenTasks] = useState(false);
  const [selectedCase, setCase] = useState(0);

  const [OpenTaskForm, setOpenTaskForm] = useState(false);
  const [selectedTask, setTaskId] = useState(0);

  const handleOpenTasks=(caseId)=>{ 
    setOpenTasks(true);
    setCase(caseId);   
  }

  const handleOpenTaskForm=(taskId)=>{ 
    setOpenTaskForm(true);
    setTaskId(taskId);   
  }

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home" className='navigation'>
        <li>Task Assignment</li>
      </Nav> 
      <div className="col-md-12 mx-20vh">
        <Stack direction="horizontal" gap={3}>
          <Cases className="p-2" handleOpenTasks={handleOpenTasks} ></Cases>
          <Collapse in={openTasks} dimension="width">
            <div id="example-fade-text">
             {selectedCase>0?<Tasks caseId={selectedCase} className="p-2" handleOpenTaskForm={handleOpenTaskForm} ></Tasks>:<>Select a case.</>}
            </div>
          </Collapse>
          <Fade in={OpenTaskForm}>
            <div id="example-fade-text">              
             {<TaskForm className="p-2" _taskId={selectedTask} _caseId={selectedCase} ></TaskForm>}              
            </div>
          </Fade>
        </Stack>
      </div>
    </>
  );
}

export default App;
