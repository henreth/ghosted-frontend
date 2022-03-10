import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/ghosted-logo.png' 
import '../style/header.css';
import Sidebar from './Sidebar'
import reset from '../img/reset-icon2.png'
import axios from "axios";
import FakeModal from './MatchModal';
import userPhoto from '../img/userPhoto.jpeg'


let undoUrl = 'http://localhost:4000/reset'


function Header({matches,setMatches, user}) {

  function handleResetClick(){
    axios.patch(undoUrl)
    .then(window.location.reload())
  }
  
  return (
    <div>
    <Sidebar 
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'} 
        width={"500px"}
        matches = {matches}
        setMatches = {setMatches}
        user={user}
    />
    <div className="header">
      <div className='header-container'>


        {/* <NavLink to="/"> */}
            <img 
              src={logo}
              alt="Logo"
              className="header-logo"
              />
        {/* </NavLink> */}

        {/* <img 
          src={userPhoto}
          className='profile-photo'
          /> */}

        <img 
          src={reset}
          className='reset-button'
          onClick={handleResetClick}
        />



        </div>
      </div>
    </div>
  );
}

export default Header;