import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getDatabase, ref, onValue} from "firebase/database";
import { firebase } from './firebase';
import  activeId  from './activeId';

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const db = getDatabase(firebase);
const nameRef = ref(db, 'users/'+ activeId.id + '/username');
const emailRef = ref(db, 'users/'+ activeId.id + '/email');
const passwordRef = ref(db, 'users/'+ activeId.id + '/password');

var name = '';
var email = '';
var password = '';

onValue(nameRef, (snapshot) => {
   name = snapshot.val();
});

onValue(emailRef, (snapshot) => {
  email = snapshot.val();
});

onValue(passwordRef, (snapshot) => {
  password = snapshot.val();
});

  return (
    
    <div>
      <Button color='inherit' onClick={handleClickOpen}>
        Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h1>Welcome {name} </h1>

            username : {name} <br/>
            email    : {email} <br/>
            password : {password}  <br/>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}