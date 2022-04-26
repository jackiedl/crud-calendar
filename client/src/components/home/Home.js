import React, { useEffect } from "react";

import Box from "@mui/material/Box"

import Navbar from "../navbar/Navbar";
import Calendar from "../calendar/Calendar";
import { useDispatch } from "react-redux";
import { getTasks } from "../../redux/actions/TaskActions";

export default function Home(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch])

  return(
    <Box>
      <Navbar /> 
      <Calendar />
    </Box>
  )
}
