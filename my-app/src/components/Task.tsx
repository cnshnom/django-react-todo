
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



    </li>);
}
export default Task;