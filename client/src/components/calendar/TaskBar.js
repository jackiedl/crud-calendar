import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

export default function TaskBar(props){
  const tasks = useSelector((state) => state.task);

  return(
    <Box onClick={props.onClick} sx={{overflow: "hidden", overflowY: "scroll", "&::-webkit-scrollbar": {display: "none"}}}>
      
    </Box>  
  )
}