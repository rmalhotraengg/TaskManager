import { ListGroup, Badge } from "react-bootstrap"
export const Task = (props) => {
    return (
        <ListGroup.Item
            style={{ cursor: 'pointer', marginLeft: "12px" }}
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => props.handleOpenTaskForm(props.id)}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.name}</div>
                {props.description}
            </div>
            <Badge bg="primary" pill>
                {props.status}
            </Badge>
        </ListGroup.Item>

    )
}