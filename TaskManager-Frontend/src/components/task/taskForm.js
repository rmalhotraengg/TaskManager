import { Form, Button } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById, createTask, updateTask } from "../../store/taskSlice";

export const TaskForm = ({ _taskId, _caseId }) => {

  const { tasks, status, error } = useSelector(state => state.tr);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    taskId: 0,
    name: '',
    description: '',
    dueDate: '',
    status: '',
    CaseId: _caseId,
  }); 

  useEffect(() => {
    if (_taskId) {
      dispatch(fetchTaskById(_taskId));
    }
  }, [dispatch, _taskId]);

  useEffect(() => {
    const initialTask = tasks.find(task => task.id === parseInt(_taskId)); 

    if (initialTask) {
      setFormData({
        name: initialTask.name || '',
        description: initialTask.description || '',
        dueDate: initialTask.dueDate ? initialTask.dueDate.split('T')[0] : '', 
        status: initialTask.status || ''
      });
    }
  }, [dispatch, _taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle   submission
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.CaseId = _caseId;
    formData.Id = _taskId;
    if (_taskId > 0) {
      dispatch(updateTask(formData));
    }
    else {
      dispatch(createTask(formData))
    }
    console.log(_caseId);
  };

  const handleStatusChange = () => { 
    formData.CaseId = _caseId;
    formData.Id = _taskId;
    const status = formData.status

    if (status === "pending") {
      formData.status = "inProgress";
    }
    else if (status === "inProgress" || status === "open") {
      formData.status = "completed";
    }
    if (_taskId > 0) {
      dispatch(updateTask(formData));
    }
   }

return (
  <div className="form">
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            maxLength={500}
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="dueDate">Due Date</Form.Label>
          <Form.Control
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="status">Status</Form.Label>
          <Form.Select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Select>
        </Form.Group>


        <Button style={{ marginRight: "4px" }} type="submit">{_taskId > 0 ? 'Update Task' : 'Create Task'}</Button>

        {_taskId > 0 && formData.status !== "completed" ? <Button onClick={() => handleStatusChange()} type="submit">{formData.status === "pending" || formData.status === "" || formData.status === "open" ? 'Start Task' : 'Complete Task'}</Button> : <></>}
      </fieldset>
    </Form></div>
);
};

