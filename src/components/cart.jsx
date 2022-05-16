import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { IconButton } from '@mui/material';
import { Fragment } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import purchases from './purchases';

export default function Cart(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let total = 0;

    for(let i=0; i<purchases.length; i++){
         total = total + purchases[i].price;
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
          <ShoppingCartRoundedIcon/>
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
          
          {purchases.map((purchase)=>{
              return <MenuItem>{purchase.name}  -  RS.{purchase.price}</MenuItem> ;
          })}
          <MenuItem>Total  -  {total}</MenuItem>
          <MenuItem onClick={handleClose}>Close</MenuItem>
          
        </Menu>
      </div>
    )  
}