import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import '../style/app.css';
import undo from '../img/undo.png'
import heart from '../img/real_heart.png'
import reject from '../img/reject_bones2.png'
import NavBar from './Header'
import HomePage from './HomePage'


function App () {


  return (
    <React.Fragment>
      <NavBar />
      <HomePage />
    </React.Fragment>
  )
}

export default App