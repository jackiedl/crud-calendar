import React, { useState } from "react";
import TaskForm from "./TaskForm";

import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export default function CalendarCell(props){
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box container>
      <Box gridColumn="span 1"  display="flex" flexDirection="column" height="15vh" sx={{ borderLeft: "#dadce0 1px solid"}} onClick={handleOpen}>
        <Typography sx={props.today ? {color: "#00bfff", textShadow: "0 0 1px #00bfff, 0 0 1px black"} : {}}> 
        {props.day.day} 
       </Typography>
      </Box>
      <TaskForm date={props.day} open={open} close={handleClose} />
    </Box>
  )
}
