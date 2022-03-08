import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../style/app.css';
import NavBar from './Header'
import HomePage from './HomePage'

let peopleUrl = 'http://localhost:4000/profiles'
let likesUrl = 'http://localhost:4000/likes'


function App () {

  let [db,setDB] = useState([]);
  let [liked,setLiked] = useState([]);

  useEffect(()=>{
    axios.get(peopleUrl)
    .then(r=>{
      setDB(r.data)
      console.log(r.data)
      setCurrentIndex(r.data.length-1)
      setLastPerson(r.data[r.data.length-1])

    axios.get(likesUrl)
    .then(r=>{
      console.log(r.data)
      setLiked(r.data)})
  })
  },[])

  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastPerson, setLastPerson] = useState({})

  return (
    <React.Fragment>
      <NavBar />
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
    </React.Fragment>
  )
}

export default App