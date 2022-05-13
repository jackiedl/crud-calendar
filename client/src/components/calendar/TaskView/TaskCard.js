import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TaskCard(props){
  const [taskData, setTaskData] = useState({
    creator: "Admin",
    title:props.task.title,
    description: props.task.description,
    date: props.task.date
  });

  const [showFull, setShowFull] = useState(false);

  const handleClick = () => {
    setShowFull(true)
  }

  return(
    <Box>
      { !showFull ?
        <Button fullWidth variant="contained" sx={{marginBottom:0.5, justifyContent: "flex-start" }} onClick={handleClick}>
          <Typography> {taskData.title}</Typography>
        </Button> :
        <Box>
          <Typography> {taskData.title}</Typography>
          <Typography> {taskData.description}</Typography>
        </Box>
    }
    </Box>
  )
}