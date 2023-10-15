import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { Button } from '@mui/material';
import {Data} from './components/Data'
import './App.css';


const data =[
  {id:"1",
  title:"go gym",
  description:"do squat",
  complete:true
  },
  {
    id:"2",
    title:"go supermarket",
    description:"buy vegetables",
    complete:false

  },
  {
    id:"3",
    title:"learn python",
    description:"build todo app",
    complete:false

  }
]



function App() {
  const[viewCompleted,setViewCompleted]=useState(false);
 
  function clickCompleted(){
    setViewCompleted(true);
    console.log(viewCompleted);

  }

  function clickUncompleted(){
    setViewCompleted(false);
    console.log(viewCompleted);
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Button>Add Task</Button>
      <Button onClick={clickCompleted}>Completed Tasks</Button>

      <Button onClick={clickUncompleted}>Uncompleted Tasks</Button>


      <TaskList viewCompleted={viewCompleted} data={data}></TaskList>
    </div>
  );
}

export default App;
