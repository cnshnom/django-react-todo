import { useState } from "react";
import Task from "./Task";
import {Data} from "./Data"

interface TaskListProps{
    data: Data[],
    viewCompleted:boolean

}
function TaskList(props:TaskListProps){
    const{data,viewCompleted} = props;
    const completeList = data.filter(task=>task.complete===true);
    const unCompleteList = data.filter(task=>task.complete===false);
 
    let list = viewCompleted? completeList:unCompleteList;
    
    return(<ul>{list.map(task=>(<Task key={task.id} title={task.title} description={task.description} complete={task.complete} ></Task>))}
    </ul>);
}
export default TaskList;