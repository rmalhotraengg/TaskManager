import { Toast ,Col} from "react-bootstrap"
// const [show,setShow]=useState(false);
export const AppAlert = (props) => {
    console.log(props);
    if (props.show) {
        return ( 
                <Toast style={{fontWeight:"bold"}} xs={6} show={props.show} delay={3000} autohide={true}
                    bg={props.variant?.toLowerCase()}> 
                    <Toast.Body> {props.message}</Toast.Body>
                </Toast>
        )
    }
}