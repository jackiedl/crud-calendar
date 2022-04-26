import React from "react";
import { useSelector } from "react-redux";

import { getDayTask } from "../utlis";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function TaskBar(props){
  const tasks = useSelector((state) => state.task);

  const showTaskBar = () => {
    const todayTask = getDayTask(props.date, tasks)
    return(
      <Box sx={{overflow: "hidden", overflowY: "scroll", "&::-webkit-scrollbar": {display: "none"}}}>
        {
          todayTask.map((val, index) => (
            <Typography key={val.title + index}> {val.title}</Typography>
          ))
        }
      </Box>  
    )
  }

  return(
    showTaskBar()
  )
}