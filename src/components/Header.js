import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/ghosted-logo.png' 
import '../style/header.css';
import Sidebar from './Sidebar'
import reset from '../img/reset-icon2.png'
import axios from "axios";

let undoUrl = 'http://localhost:4000/reset'


function Header({matches,setMatches}) {

  function handleResetClick(){
    axios.patch(undoUrl)
    .then(window.location.reload())
  }
  
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
    <Sidebar 
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'} 
        width={"500px"}
        matches = {matches}
        setMatches = {setMatches}
    />
    <div className="header">
      <div className='header-container'>


        <NavLink to="/">
            <img 
              src={logo}
              alt="Logo"
              className="header-logo"
              />
        </NavLink>

        {/* <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-home">Home</div>
        </NavLink> */}

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