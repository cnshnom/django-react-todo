import React from 'react';
import { useState } from 'react';
import './App.css';


const tasks = [
  {
    id: 1,
    title: "go gym",
    description: "train legs",
    completed: false
  },

  {
    id: 2,
    title: "go supermarket",
    description: "buy food",
    completed: false
  },
  {
    id: 3,
    title: "learn django",
    description: "build todo app",
    completed: true
  },
]



function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  
  function clickComplete() {
    setViewCompleted(!clickComplete);
  }
  

  


  return (

    <div>
      <h1 className="text-black text-uppercase text-center my-4">task manager</h1>
      <div className="row ">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div>
              <button className='btn btn-primary'>add task</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
