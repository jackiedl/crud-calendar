import React from "react";

import Box from "@mui/material/Box"

import Navbar from "../navbar/Navbar";
import Calendar from "../calendar/Calendar";

export default function Home(){

  return(
    <Box>
      <Navbar /> 
      <Calendar />
    </Box>
  )
}