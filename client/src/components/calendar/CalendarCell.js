import React from "react";

import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export default function CalendarCell(props){
  return (
    <Box gridColumn="span 1"  display="flex" flexDirection="column" height="15vh" sx={{ borderLeft: "#dadce0 1px solid"}} >
      <Typography sx={props.today ? {color: "#00bfff", textShadow: "0 0 1px #00bfff, 0 0 1px black"} : {}}> 
        {props.day.day} 
      </Typography>
    </Box>
  )
}
