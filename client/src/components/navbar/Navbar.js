import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// (menuIcon) CRUD Calendar    Current Month  < > (Logout Icon)
export default function NavBar() {
  const [month, setMonth] = useState(3);

  const PrevMonth = () => {
    setMonth(month - 1);
  }

  const NextMonth = () => {
    setMonth(month + 1);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "transparent", boxShadow: "none"}}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: "#5f6368" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: .1, color: "#5f6368"}}>
            CRUD Calendar
          </Typography>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 1, color: "#5f6368" }} onClick={PrevMonth}>
            <NavigateBeforeIcon/>
          </IconButton>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: "#5f6368" }} onClick={NextMonth}>
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
