import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasksFromAPI, fetchTaskByIdFromAPI, createTaskInAPI, updateTaskInAPI, deleteTaskInAPI } from '../service/taskService';


// Fetch all tasks 'tasks/fetchTasks'
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (caseId) => {
  const response = await fetchTasksFromAPI(caseId);
  return response;
});

// Fetch all tasks 'tasks/fetchTaskById'
export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', async (taskId) => {
  const response = await fetchTaskByIdFromAPI(taskId);
  return response;
});

// Create a new task
export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
  const response = await createTaskInAPI(task);
  return response;
});

// Update a task
export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await updateTaskInAPI(task);
  return response;
});

// Delete a task
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  const response = await deleteTaskInAPI(taskId);
  return response;
});

// Initial state
const initialState = {
  tasks: [],
  status: 'idle',  
  error: null,
};
// Create the slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: { 
  },
  extraReducers: (builder) => {
    builder
      // Fetch tasks
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload; // Load tasks into state
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch taskby id
      .addCase(fetchTaskById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const fetchedTask = action.payload;
        const existingTaskIndex = state.tasks.findIndex((task) => task.id === fetchedTask.id);
        if (existingTaskIndex !== -1) {
          state.tasks[existingTaskIndex] = fetchedTask; // Update existing task if found
        } else {
          state.tasks.push(fetchedTask); // Add new task if not found
        }
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Create task
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload); // Add new task to state
      })

      // Update task
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const existingTaskIndex = state.tasks.findIndex((task) => task.id === updatedTask.id);
        if (existingTaskIndex !== -1) {
          state.tasks[existingTaskIndex] = updatedTask; 
        }
      })

      // Delete task
      .addCase(deleteTask.fulfilled, (state, action) => {
        const taskId = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== taskId); 
      });
  },
});


export default taskSlice.reducer;