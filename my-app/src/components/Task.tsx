import { Button } from "@mui/material";

interface TaskProps{
    
        title:string,
        description:string,
        complete:boolean
    
}

function Task(props:TaskProps){
    return(<li>
        <p>Title:{props.title}</p>
        <p>Description:{props.description}</p>
        <p>Complete:{props.complete?"yes":"no"}</p>

        <Button>Edit</Button>
        <Button>Delete</Button>

    </li>);
}
export default Task;