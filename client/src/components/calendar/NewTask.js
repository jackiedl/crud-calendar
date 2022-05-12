import React, { useState} from "react";
import { useDispatch } from "react-redux";

import { createTask } from "../../redux/actions/TaskActions";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';

export default function NewTask(props){
  const [taskData, setTaskData] = useState({
    creator: "Admin",
    title:"",
    description: "",
    date: props.date
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData))
    props.close();
  }

  return(
    <TabPanel value={props.value}>
        <Box component="form" noValidate autoComplete="off" sx={{'& .MuiTextField-root': { m: 1}, }}>
          <TextField fullWidth={true} id="task-title" label="Add Task Title" variant="filled" value={taskData.title} onChange={(e) => setTaskData({...taskData, title: e.target.value})}/>
          <TextField fullWidth={true} id="task-description" label="Description" multiline rows={4} variant="filled" value={taskData.description} onChange={(e) => setTaskData({...taskData, description: e.target.value})} />
        </Box>
        <DialogActions>
          <Button onClick={handleSubmit} sx={{}}>
            Submit
          </Button>
        </DialogActions> 
    </TabPanel>
  )
}