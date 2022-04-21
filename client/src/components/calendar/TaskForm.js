import React from "react";
import { getMonth } from "../utlis";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';

export default function TaskForm(props){

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={props.open}
      onClose={props.close}
      sx={{flexWrap: "nowrap"}}
    >
      <DialogTitle> 
        <AppBar position="static" style={{ background: "transparent", boxShadow: "none"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#5f6368"}}>
              {getMonth(props.date.month-1)} {props.date.day}, {props.date.year} 
            </Typography>
            <IconButton size="large" edge="end" aria-label="menu" sx={{ color: "#5f6368" }} onClick={props.close}>
                <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      <DialogContent>
        <Box 
          componen="form" 
          noValidate 
          autoComplete="off"   
          sx={{
          '& .MuiTextField-root': { m: 1},
        }}>
          <TextField 
              fullWidth={true}
              id="task-title"
              label="Add Task Title"
              variant="filled"
            />
          <TextField 
            fullWidth={true}
            id="task-description"
            label="Description"
            multiline
            rows={4}
            variant="filled"
          />
        </Box>
        <DialogActions>
          <Button onClick={props.close} sx={{}}>
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}