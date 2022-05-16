import React,{useState, Fragment} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Menudrop from './menudrop';
import Categories from './categories';
import Cart from './cart';
import {MyContext} from './global';
import { useContext } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchBar() {

  const{SearchItem,setSearchItem} = useContext(MyContext);

  let searched = '';

  const handleInput =(event)=>{
   searched = event.target.value;
   setSearchItem(searched);
  }

  return (
    <Fragment>
    <Box sx={{ flexGrow: 1}}>
      <AppBar  position="static">
        <Toolbar sx = {{bgcolor:'text.primary'}}>
          <Menudrop/>
          <Typography
            variant="h4"
            noWrap
            component="div"
            className='shopName'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Keels
          </Typography>
          <Cart/>
          <Categories/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInput}
            />
            
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </Fragment>
  );
}
