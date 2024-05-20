import "./Topbar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./../../assets/image/logo/prayer-times.png"
import { useTheme, ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Switch from '@mui/material/Switch';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

function Topbar({change , checked}) {
 
  return (
      <Box sx={{ flexGrow: 1 }} style={{marginBottom : "8rem"}}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={logo} alt="logo" style={{width : "50px" , borderRadius : "50%"}} />
              </Typography>
              <Switch {...label} defaultChecked color="default" onChange={change} checked={checked} />
            </Toolbar>
          </AppBar>
        </Box>
);
  
}

export default Topbar
