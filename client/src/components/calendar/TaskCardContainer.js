import React from "react";

import TaskCard from "./TaskCard";

import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import Typography from "@mui/material/Typography";


export default function TaskCardContainer(props){

  const showTasks = () => {
    if (props.tasks.length === 0){
      return (
        <Typography sx={{width: 1, height: "100%"}}>No Tasks today</Typography>
      )
    }else{
      return (
        <Box display="flex" flexDirection="column" sx={{zIndex: 1000, overflow: "hidden", overflowY: "scroll", "&::-webkit-scrollbar": {display: "none"}}}>
          {
          props.tasks.map((task, index) => (
            <TaskCard key={task.title + index} task={task}/>
          ))
          }
        </Box> 
      )
    }
  }

  return(
    <TabPanel value={"2"}>
      <Box gridColumn="span 1"  display="flex" flexDirection="column" minHeight="265px" maxHeight="265px">
        {showTasks()}
      </Box>
    </TabPanel>
  )
}

