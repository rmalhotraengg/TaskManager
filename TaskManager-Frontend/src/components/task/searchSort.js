
import { Button,Form } from "react-bootstrap";
import React, { useState } from 'react';

export const SearchSort = (props) => { 

  const handleSearchChange = (e) => {
    props.handleSearchChange(e.target.value);  
};
const handleSortChange = (e) => {
    props.handleSortChange(e.target.value);  
};
  
    return (
        <div style={{marginBottom: "20px"}}>
            <div>
                <Form.Group controlId="search" style={{width: "114px",float: "left"}}>
                    <Form.Control
                        type="text"
                        placeholder="Search tasks..."
                        value={props.searchTerm}
                        onChange={handleSearchChange}
                        style={{ width: '113px', display: 'inline-block', marginRight: '10px' }}
                    />
                </Form.Group>

                <Form.Group controlId="sort"  style={{width: "130px",float: "left",marginLeft:"3px"}}>
                    <Form.Select value={props.sortBy} onChange={handleSortChange} style={{ width: '150px', display: 'inline-block' }}>
                        <option value="name">Sort by Name</option>
                        <option value="dueDate">Sort by Due Date</option>
                        <option value="status">Sort by Status</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <div style={{ float: "right", display: "block"}}>
                <Button type="submit" onClick={() => props.handleOpenTaskForm(0)}>+ Task</Button>
            </div>
        </div>
    )
}