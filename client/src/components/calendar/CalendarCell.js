import React from "react";

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

export default function CalendarCell(props){

  return (
    <Grid item container spacing="0" sx={{flex: 1, borderLeft: "#dadce0 1px solid"}}>
        {props.today.day === props.day.day && props.today.month === props.day.month && props.today.year === props.day.year ? 
          <Grid item xs={12}>
            <Typography sx={{color: "#00bfff", textShadow: "0 0 1px #00bfff, 0 0 1px black"}} component="div"> 
              {props.day.day} 
            </Typography>
          </Grid>
          :
          <Grid item xs={12}>
            <Typography> {props.day.day} </Typography> 
            
          </Grid>
        }
    </Grid>
  )
}
