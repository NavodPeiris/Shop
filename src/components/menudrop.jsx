import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sign from './signPage';
import Login from './loginPage';
import Profile from './profilePage';
import { MyContext } from './global';

//How to put routes in menuItem ???
//connect pages profile, login, signin

export default function Menudrop() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [signed,setSigned] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MyContext.Provider value={{signed,setSigned}}>
    <div>
      <IconButton
        size="large"
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
        <MenuIcon/>
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
        
        <MenuItem><Profile/></MenuItem>
        {signed ? '' : <MenuItem><Sign/></MenuItem> }
        {signed ? '' : <MenuItem><Login/></MenuItem> }
        
        
      </Menu>
      
    </div>
    </MyContext.Provider>
  )
}
