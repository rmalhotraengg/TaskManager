import './case.css'
import { Card } from 'react-bootstrap'
export const Case = (props) => {
    return (
        <>   <Card className='case'>
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Priority :</Card.Subtitle>
                <Card.Text>
                    {props.item.description}
                </Card.Text>
                <Card.Link href="#" onClick={()=>props.handleOpenTasks(props.item.id)} >Task Count  {props.item.TasksCount}</Card.Link>
            </Card.Body>
        </Card></>
    )
}