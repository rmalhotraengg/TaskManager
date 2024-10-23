import { useDispatch, useSelector } from "react-redux"
import { Task } from "./task";
import {ListGroup } from "react-bootstrap" 
import "./tasks.css";
import { useEffect, useState } from "react";
import { fetchTasks } from "../../store/taskSlice";
import { SearchSort } from "./searchSort";
export const Tasks = (props) => {
    const { tasks, status, error } = useSelector(state => state.tr);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc') 

    useEffect(() => {  
        dispatch(fetchTasks(props.caseId)); 
    }, [dispatch]) 

    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
      };
    
      const handleSortChange = (sortVal) => {
        setSortOrder(sortVal);
      };
    
      const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered tasks
    const sortedTasks = filteredTasks.sort((a, b) => {
        const bValue = b[sortOrder]; 
            return a.name.localeCompare(bValue); 
    });

    return (
        <div> 
            <div className="tasks">
                <SearchSort 
                sortBy={sortOrder}
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
                 handleSortChange={handleSortChange}
                  handleOpenTaskForm={(taskId)=>props.handleOpenTaskForm(0)}/>
               <br/>
                {sortedTasks && sortedTasks.length > 0 ?
                    <ListGroup  style={{display: "block",marginTop: "13px"}}  variant="flush" className="p-0" >
                        {sortedTasks.map((task,index) => {
                            return <Task key={index}   {...task}  handleOpenTaskForm={(taskId)=>props.handleOpenTaskForm(taskId)} />
                        })}
                    </ListGroup> : <div style={{display:"flex"}}><div>No Tasks available</div></div> }
            </div>
        </div>
    )
}