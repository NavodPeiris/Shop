import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MyContext } from './global';
import { useContext } from 'react';
import { firebase } from './firebase';
import { getDatabase, ref, set } from "firebase/database";
import  activeId  from './activeId';

export default function Sign() {

   const[open,setOpen] = React.useState(false);
   const{signed,setSigned} = useContext(MyContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let newUser = {
      userId: 0,
      name: '',
      email: '',
      password: ''
  }

  const writeUserData = () => {
    newUser.userId = newUser.userId + 1;
    activeId.id = newUser.userId;
    const db = getDatabase(firebase);
    set(ref(db, 'users/' + newUser.userId), {
      username: newUser.name,
      email: newUser.email,
      password : newUser.password
    });
  }
  

  //update users
  const updateUsers = () =>{
      setSigned(true);
      console.log('run');
      writeUserData();
  }

  return (

    <div>
      <Button color='inherit' onClick={handleClickOpen}>
        Signup
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Signup to our website to shop unlimitedly and receive special discounts.
            You will receive emails about new products and discounts.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label= "Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                newUser.name = event.target.value;
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label= "Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                newUser.email = event.target.value;
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label= "Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                newUser.password = event.target.value;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{
              handleClose();
              updateUsers();
          }}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}