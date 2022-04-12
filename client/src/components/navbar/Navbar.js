import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { prevMonth, nextMonth } from "../../redux/actions/ChangeMonthAction";
//import { login, logout } from "../../redux/actions/LoginAction";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { prevMonth } from '../../redux/actions/ChangeMonthAction';

// (menuIcon) CRUD Calendar    Current Month  < > (Logout Icon)

export default function NavBar() {
  const month = useSelector(state => state.date.month);
  //const signin = useSelector(state => state.login.isLogin);
   

  const dispatch = useDispatch();

  // const PrevClick = () => {
  //   dispatch({type:"PREV_MONTH"})
  // };
 
  const NextClick = () => {
    dispatch({type:"PREV_MONTH"})
  };

  // const LoginClick = () => {
  //   dispatch(login())
  // };

  // const LogoutClick = () => {
  //   dispatch(logout())
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "transparent", boxShadow: "none"}}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: "#5f6368" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: .1, color: "#5f6368"}}>
            CRUD Calendar 1
          </Typography>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={prevMonth}>
            <NavigateBeforeIcon/>
          </IconButton>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: "#5f6368" }} onClick={prevMonth}>
            <NavigateNextIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#5f6368"}}>
          {month}
          </Typography>
          <Button style={{color: "#5f6368"}}> Login </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}