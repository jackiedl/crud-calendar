import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import CalendarCell from "./CalendarCell";

const weekname = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",]

export default function Calendar(){
  
  const showWeekDate = () => {
    return(
      weekname.map((val, index) => (
        <Typography key={val + index} sx={{ flexGrow: 1, color: "#5f6368"}}>
          {val}
        </Typography>
      ))
    )
  }

  const showCalendarCells = () => {
    return(
      <CalendarCell />
    )
  }

  return(
    <Grid container sx={{ flexGrow: 1, textAlign: "center", borderTop: "#dadce0 1px solid" }}>
      <Grid item container columns={7} component="div">
        {showWeekDate()}
      </Grid>
      <Grid item container component="div">
        {showCalendarCells()}
      </Grid>
    </Grid>
  )
}
