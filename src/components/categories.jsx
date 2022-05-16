import React, {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import {MyContext} from './global';
import { useContext } from 'react';

export default function Categories() {

  const{Categorize,setCategorize} = useContext(MyContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showFruits = () =>{
    setCategorize('Fruits');
    console.log('fruits');
  }

  const showVeges = () =>{
    setCategorize('Vegetables');
  }

  const showAll = () =>{
    setCategorize('All');
  }

  return (
    <div>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
          handleClose();
          showFruits();
        }}>Fruits</MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          showVeges();
        }}>Vegetables</MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          showAll();
        }}>All</MenuItem>
      </Menu>
    </div>
  );
}
