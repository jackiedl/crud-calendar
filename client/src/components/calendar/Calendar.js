import React from "react";
import { useSelector } from "react-redux";

import { getDaysArray } from "../utlis";

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarCell from "./CalendarCell";

const weekname = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",]

export default function Calendar(){
  const date = useSelector(state => state.date);
  const calendar = getDaysArray(date.month, date.year);
  const today = new Date();
  const todayObject = {
    day: today.getDate(),
    month: today.getMonth()+1,
    year: today.getFullYear(),
  }

  const showWeekDate = () => {
    return(
      <Grid item container columns={7} component="div" wrap="nowrap">
      {
        weekname.map((val, index) => (
        <Box key={val+index} sx={{flex: 1, borderLeft: "#dadce0 1px solid"}}>
          <Typography>
            {val}
          </Typography>
        </Box>
      ))
      }    
      </Grid>
    )
  }
  const showCalendar = () => {
    return(
      calendar.map((row, rowIndex) => (
        <Grid key={rowIndex} item container columns={7} sx={{wrap:"nowrap", borderBottom: "#dadce0 1px solid"}}>
          {row.map((day, dayIndex) => (
            <CalendarCell key={day.month+dayIndex} day={day} today={todayObject}/>
          ))}
        </Grid>
      ))
    )
  }

  return(
    <Grid container sx={{textAlign: "center", borderTop: "#dadce0 1px solid"}}>
      <Grid item container columns={7} component="div">
        {showWeekDate()}
      </Grid>
      <Grid item container sx={{ height:"105vh" }}>
        {showCalendar()};
      </Grid>
    </Grid>
  )
}
