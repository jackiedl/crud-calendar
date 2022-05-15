import React from "react";
import { useSelector } from "react-redux";

import { getDayTask } from "../../utlis";

import Box from "@mui/material/Box";

export default function TaskBar(props){
  const tasks = useSelector((state) => state.task);
  const todayTask = getDayTask(props.date, tasks);

  const showTaskBar = () => {
    return(
      <Box display="flex" flexDirection="column">
        {todayTask.length > 0 ? todayTask.length : ""}
      </Box>  
    )
  }

  return(
    showTaskBar()
  )
}