

const API_URL = 'https://localhost:7053/api/Task'; 

// Fetch all tasks
export const fetchTasksFromAPI = async (caseId) => {
  const response = await fetch(`${API_URL}/case/${caseId}`); 
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

export const fetchTaskByIdFromAPI = async (taskId) => {
    const response = await fetch(`${API_URL}/${taskId}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch task details');
    }
    return response.json();
  };

// Create a new task
export const createTaskInAPI = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return response.json();
};

// Update an existing task
export const updateTaskInAPI = async (task) => {
  const response = await fetch(`${API_URL}/${task.Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return response.json();
};

// Delete a task
export const deleteTaskInAPI = async (taskId) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return taskId; // Return the deleted task ID
};
