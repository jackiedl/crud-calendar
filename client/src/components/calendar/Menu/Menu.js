import React from "react";

import { useSelector } from "react-redux";
import { getMonth } from "../../utlis";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Menu(){
  const date = useSelector(state => state.date);
  const tasks = useSelector(state => state.task);

  const getMonthTask = () => {
    let task =  tasks.filter(task => task.date.month === date.month && task.date.year === date.year);
    task.sort((a,b) => a.date.day - b.date.day);
    return task
  }
  const monthTask = getMonthTask();

  const getTaskDays = () => {
    let days = [];
    for (let i = 0; i < monthTask.length; i++){
      if (!days.includes(monthTask[i].date.day) ){
        days.push(monthTask[i].date.day)
      }
    }
    return days;
  }
 
  const taskDays = getTaskDays();

  const showAllTask = () => {
    return ( 
      taskDays.map((day, index) => (
        <Box display="flex" justifyContent="flex-start" flexDirection="column" key={day + index} >
          <Typography variant="h5" sx={{marginLeft: 1, textAlign:"left", color: "black"}}>{getMonth(date.month-1)} {day} </Typography>
          {
            monthTask.filter((t => t.date.day === day)).map((task, index) => (
              <Typography key={index}variant="h6" component="div" sx={{ marginLeft: 2, textAlign:"left",flexGrow: 1, color: "black"}}> {task.title}</Typography> 
            ))
          } 
        </Box>
      ))  
    )
  }

  return(
    <Box gridColumn="span 3" sx={{borderBottom: "#dadce0 1px solid"}}>
      {monthTask.length > 0 ? 
        showAllTask() : 
        <Typography variant="h5" sx={{marginLeft: 1, textAlign:"left", color: "black"}}>No tasks this month</Typography>}
    </Box>
  )
}