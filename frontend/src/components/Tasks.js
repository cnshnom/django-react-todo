import Task from './Task'


function Tasks(props) {
    return (
    <ul>
        {props.map(task => (
            <Task props={task}></Task>
    ))}
    </ul>
    );


}

export default Tasks;