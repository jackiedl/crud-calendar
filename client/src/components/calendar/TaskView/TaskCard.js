import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function TaskCard(props){
  const [taskData, setTaskData] = useState({
    creator: "Admin",
    title:props.task.title,
    description: props.task.description,
    date: props.task.date
  });

  const [showFull, setShowFull] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleOpen = () => {
    setShowFull(true)
  }

  const handleClose = () => {
    setShowFull(false);
    setShowEdit(false);
    setTaskData({
      creator: "Admin",
      title:props.task.title,
      description: props.task.description,
      date: props.task.date
    })
  }

  const handleEditOpen = () => {
    setShowEdit(true);
  }
  const handleEditClose = () => {
    setShowEdit(false);
    setTaskData({
      creator: "Admin",
      title:props.task.title,
      description: props.task.description,
      date: props.task.date
    })
  }
  
  return(
    <Box sx={{marginBottom: 1 }}>
      { !showFull ?
        <Button fullWidth variant="contained" sx={{justifyContent: "flex-start" }} onClick={handleOpen}>
          <Typography> {taskData.title}</Typography>
        </Button> :
        <Box sx={{ flexGrow: 1 }}>
         {!showEdit ? 
           <AppBar position="relative" style={{ background: "transparent", boxShadow: "none"}}>
            <Toolbar variant="dense">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "black"}}>
                {taskData.title}
              </Typography>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={handleEditOpen}>
                <EditIcon />
              </IconButton>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} >
                <DeleteIcon />
              </IconButton>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <Typography component="div" sx={{ flexGrow: 1, color: "black"}}> {taskData.description}</Typography>
            </Toolbar>
          </AppBar> :
           <AppBar position="relative" style={{ background: "transparent", boxShadow: "none"}}>
            <Toolbar variant="dense">
              <TextField size="large" id="task-title" label="Title" variant="standard" value={taskData.title} onChange={(e) => setTaskData({...taskData, title: e.target.value})} sx={{flexGrow: 1}}/>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={handleEditClose}>
                <EditIcon />
              </IconButton>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} >
                <DeleteIcon />
              </IconButton>
              <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <Toolbar justifyContent="flex-end">
              <TextField size="small" id="task-description" label="Description" multiline rows={1} variant="standard" value={taskData.description} onChange={(e) => setTaskData({...taskData, description: e.target.value})} sx={{flexGrow: 1}}/>
            </Toolbar>
            <Button> Save</Button>
          </AppBar>
        }
        </Box>
    }
    </Box>
  )
}
