import "./Topbar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "./../../assets/image/logo/prayer-times.png"
import Switch from '@mui/material/Switch';

function Topbar({change , checked}) {

  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);
const color =  colorChange  ? "navbar colorChange" : "navbar"
 
  return (
      <Box sx={{ flexGrow: 1 }} style={{marginBottom : "8rem" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={logo} alt="logo" style={{width : "50px" , borderRadius : "50%"}} />
              </Typography>
              <Switch  defaultChecked color="default" onChange={change} checked={checked} />
            </Toolbar>
          </AppBar>
        </Box>
);
  
}

export default Topbar
