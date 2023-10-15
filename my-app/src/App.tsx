import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import './App.css';
import { Data } from './components/Data';

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='modal'
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Task Item
          </Typography>        
        <div>
        <p>Title:</p>
        <TextField id="filled-basic" label="Filled" variant="filled" />

        </div>
        <div><p>Description:</p>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
       
        <FormControlLabel required control={<Checkbox />} label="Complete" />
        <Button>Save</Button>
        
        </Box>
      </Modal>


      <Button onClick={clickCompleted}>Completed Tasks</Button>

      <Button onClick={clickUncompleted}>Uncompleted Tasks</Button>


      <TaskList viewCompleted={viewCompleted}></TaskList>
    </div>
  );
}

export default App;
