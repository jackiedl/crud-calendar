import React from "react";
import { useSelector } from "react-redux";

import { getDayTask } from "../../utlis";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TaskBar(props){
  const tasks = useSelector((state) => state.task);

  const showTaskBar = () => {
    const todayTask = getDayTask(props.date, tasks)
    return(
      <Box display="flex" flexDirection="column" sx={{zIndex: 1000, overflow: "hidden", overflowY: "scroll", "&::-webkit-scrollbar": {display: "none"}}}>
        {
          todayTask.map((val, index) => (
            <Button  key={val.title + index} variant="contained" sx={{justifyContent: "flex-start" }}>
              <Typography> {val.title}</Typography>
            </Button>
          ))
        }
      </Box>  
    )
  }

  return(
    showTaskBar()
  )
}