import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div >
      <AppBar position="static" style={{backgroundColor:'#424242', marginBottom:"10px"}}>
        <Tabs style={{display:'grid', justifyContent:'center'}}>
        <Link style={{textDecoration: "none", color: "white"}} to='/'> <Tab label="Weather" icon={<WbSunnyIcon />} style={{marginRight:'50px'}} /> </Link>
        <Link style={{textDecoration: "none", color: "white"}} to='/favorites'>  <Tab label="Favorites" icon={<FavoriteIcon />} style={{marginLeft:'50px'}}/> </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}