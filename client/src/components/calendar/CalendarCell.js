import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CalendarCell(props){

  return (
    <Box sx={{flex: 1, borderLeft: "#dadce0 1px solid"}}>
      <Typography>
        {props.day}
      </Typography>
    </Box>
  )
}
