import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box"

import Calendar from "../calendar/Calendar/Calendar";
import Navbar from "../navbar/Navbar";


import { useDispatch } from "react-redux";
import { getTasks } from "../../redux/actions/TaskActions";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Home(){
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({type: "LOGOUT"});
    navigate("/");
    setUser(null);
  }

  useEffect(() => {
    if (!user){
      navigate("/")
    }else{
      dispatch(getTasks(user));
    }    
  }, [dispatch, location, navigate, user])

  return(
    <Box>
      <Navbar logout={logout}/> 
      <Calendar />
    </Box>
  )
}
