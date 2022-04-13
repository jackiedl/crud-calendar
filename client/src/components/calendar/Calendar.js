import React from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarCell from "./CalendarCell";

const weekname = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",]

export default function Calendar(){
  const calendar = useSelector(state => getCalendarArray(state.date.month, state.date.year));
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
            <CalendarCell key={day.month+dayIndex} day={day.day}/>
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


function getCalendarArray(month, year){
  const prevMonth = (month - 1 > 1 ? month - 1 : 12)
  const prevYear = (prevMonth === 12 ? year - 1: year);
  const nextMonth = (month + 1 > 12 ? 1 : month + 1);
  const nextYear = (nextMonth === 1 ? year + 1: year);
  const numberOfDaysInMonth = new Date(year, month, 0).getDate();
  const numberOfDaysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
  let calendar = []
  let startWeekdate = new Date(year + "-" + month + "-1").getDay();
  let currentDay = 1;
  let nextMonthFlag = false;

  for (let row = 0; row < 6; row ++){
    let calendarRow = Array(7).fill(null);
    if (startWeekdate === 7) startWeekdate = 0;
    for (let col = 0; col < 7; col++){
      if (currentDay > numberOfDaysInMonth){
        currentDay = 1;
        nextMonthFlag = true;
      }

      if (col === startWeekdate ){
        if (nextMonthFlag){
          calendarRow[col] = createDateObject(currentDay, nextMonth, nextYear); //add date object here
        }else{
          calendarRow[col] = createDateObject(currentDay, month, year); //add date object here
        }
        currentDay = currentDay + 1;
        startWeekdate = startWeekdate + 1;
      }else{
        calendarRow[col] = createDateObject(numberOfDaysInPrevMonth - startWeekdate + col + 1, prevMonth, prevYear); //add date object here
      }
    }
    calendar.push(calendarRow);
  }
  return calendar;
}

function createDateObject( day, month, year){
  return {
    day: day,
    month: month,
    year: year,
  }
}