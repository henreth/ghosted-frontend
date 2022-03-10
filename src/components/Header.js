import React, { useState, useEffect } from "react";
import { NavLink,useHistory } from "react-router-dom";
import logo from '../img/heart-ghost.png' 
import '../style/header.css';
import Sidebar from './Sidebar';
import reset from '../img/reset-icon2.png';
import axios from "axios";
import userPhoto from '../img/userPhoto.jpeg';
import homeIcon from '../img/dog-house-icon.png';
import helpIcon from '../img/help-icon.png';
import InfoModal from './InfoModal';


let undoUrl = 'http://localhost:4000/reset'


function Header({matches,setMatches, user,showInfoModal, setShowInfoModal}) {

  let history = useHistory();

  function handleResetClick(){
    axios.patch(undoUrl)
    .then(r=>{
      history.push('/')
      window.location.reload()})
  }

  function handleHomeClick(){
    history.push('/')
  }

  function handleInfoClick(){
    setShowInfoModal(!showInfoModal)
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
  {showInfoModal? <InfoModal user={user} setInfoModal={setShowInfoModal}/> : null}

    <div className="header">
      <div className='header-container'>


        {/* <NavLink to="/"> */}
            <img 
              src={logo}
              alt="Logo"
              className="header-logo"
              />
        {/* </NavLink> */}
        <div className="header-title">Ghostd</div>
        {/* <img 
          src={userPhoto}
          className='profile-photo'
          /> */}
          
      <img 
          src={helpIcon}
          className='help-icon'
          onClick={handleInfoClick}
          />

      <img 
          src={homeIcon}
          className='home-icon'
          onClick={handleHomeClick}
          />


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