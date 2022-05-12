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

  return(
    <Button  variant="contained" sx={{ m: 0.5, justifyContent: "flex-start" }}>
      <Typography> {props.task.title}</Typography>
    </Button>
  )
}