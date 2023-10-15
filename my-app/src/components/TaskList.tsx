import { useEffect, useState } from "react";
import Task from "./Task";
import {Data} from "./Data"
import axios from "axios";

interface TaskListProps{
    viewCompleted:boolean

}

function TaskList(props:TaskListProps){
    const{ viewCompleted} = props;
    const[data,setData]=useState<Data[]>();
    const [completeList, setCompleteList]=useState<Data[]>();
    const [uncompleteList, setUncompleteList]=useState<Data[]>();


  useEffect(()=>{
    const getData = async()=> {
      await axios
      .get<Data[]>("http://localhost:8000/api/tasks/")
      .then(res=>setData(res.data))
      .catch((err)=>{
        console.log(err.response);
      });
    };
    getData();

  },[]);  

    let list = viewCompleted? (data?.filter(task=>task.completed===true)):(data?.filter(task=>task.completed===false));

    return(<ul>
      {list && list.map(task=>(<Task key={task.id} title={task.title} description={task.description} complete={task.completed} ></Task>))}

    </ul>);
}
export default TaskList;