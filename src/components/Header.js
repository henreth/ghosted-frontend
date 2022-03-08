import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/ghosted-logo.png' 
import '../style/header.css';
import Sidebar from './Sidebar'

function Header({}) {
  
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



        </div>
      </div>
    </div>
  );
}

export default Header;