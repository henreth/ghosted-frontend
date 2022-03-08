import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

import axios from 'axios';
import '../style/app.css';
import NavBar from './Header';
import HomePage from './HomePage';
import Matches from './Matches';
import SelectedProfile from './SelectedProfile';

let peopleUrl = 'http://localhost:4000/profiles'
let likesUrl = 'http://localhost:4000/likes'
let matchesUrl = 'http://localhost:4000/matches'


function App () {

  let [db,setDB] = useState([]);
  let [liked,setLiked] = useState([]);
  let [matches,setMatches] = useState([]);

  useEffect(()=>{
    axios.get(peopleUrl)
    .then(r=>{
      setDB(r.data)
      // console.log(r.data)
      setCurrentIndex(r.data.length-1)
      setLastPerson(r.data[r.data.length-1])

    axios.get(likesUrl)
    .then(r=>{
      // console.log(r.data)
      setLiked(r.data)})

    axios.get(matchesUrl)
    .then(r=>{
      setMatches(r.data)
      console.log(r.data)
    })
  })
  },[])

  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastPerson, setLastPerson] = useState({})

  return (
    <React.Fragment>
      <NavBar
        matches = {matches}
        setMatches = {setMatches}
        />
      <Switch>
        <Route exact path="/">
          <HomePage 
            db = {db}
            setDB={setDB}
            liked={liked}
            setLiked={setLiked}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            lastPerson={lastPerson}
            setLastPerson={setLastPerson}
            peopleUrl={peopleUrl}
            likesUrl={likesUrl}
            />
        </Route>
        <Route path ="/matches">
            <Matches 
                matches = {matches}
                setMatches = {setMatches} 
            />
        </Route>
        <Route exact path ='/match/:profileId'>
            <SelectedProfile
            />
        </Route>

      </Switch>

    </React.Fragment>
  )
}

export default App