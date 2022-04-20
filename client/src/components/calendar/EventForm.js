import React from "react";

import { getMonth } from "../utlis";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EventForm(props){
  
  return(
    <Dialog open={props.open} onClose={props.close}>
    <DialogTitle>{getMonth(props.date.month-1)} {props.date.day} {props.date.year}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.close}>Submit</Button>
      
    </DialogActions>
  </Dialog>
  )
}