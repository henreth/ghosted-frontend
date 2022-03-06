import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import '../style/homepage.css';
import undo from '../img/undo.png'
import heart from '../img/real_heart.png'
import reject from '../img/reject_bones2.png'
import location from '../img/location_icon.png'
import Card from './Card'


const db = [
    {
        name: 'Jonathan Laureano',
        url: './img/richard.jpg',
        pronouns: 'he/him/his',
        age: 2314,      
    },
    {
      name: 'Jonathan Laureano',
      url: './img/richard.jpg',
      pronouns: 'he/him/his',
      age: 2314,
    },
    {
      name: 'Howie Bling',
      url: './img/richard.jpg',
      pronouns: 'he/him/his',
      age: 2314,
    },
    {
      name: 'Adam',
      url: './img/richard.jpg',
      pronouns: 'he/him/his',
      age: 2314,
    },
    {
      name: 'Paul Allen',
      url: './img/erlich.jpg',
      pronouns: 'he/him/his',
      age: 2314,
    },
    {
      name: 'Patricia Bateman',
      url: '../img/monica.jpeg',
      pronouns: 'she/her/hers',
      age: 2314,
    },
    {
      name: 'Elizabeth Holmes',
      url: '../img/jared.jpeg',
      pronouns: 'she/her/hers',
      age: 1213
    },
    {
      name: 'Abraham Lincoln',
      url: '../img/dinesh.jpeg',
      pronouns: 'she/her/hers',
      age: 'April 14, 1865',
      location: '6 feet under'
    }
  ]
  
  function HomePage () {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
    const childRefs = useMemo(
      () =>
        Array(db.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
  
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < db.length - 1
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
    }
  
    const outOfFrame = (name, idx) => {
    //   console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
  
    const swipe = async (dir) => {
      if (canSwipe && currentIndex < db.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }
  
    return (
      <React.Fragment>
        <div>
          <link
            href='https://fonts.googleapis.com/css?family=Damion&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
            rel='stylesheet'
          />
          {/* <h1>Ghosted 👻</h1> */}
          <div className='cardContainer'>
            {db.map((character, index) => (
              <Card
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  className='card'
                >
                  <h3>{character.name}</h3>
                  {/* <h4>{character.pronouns}</h4> */}
                  <img className = 'location-icon' src={location}/>
                  <div className='location-text'>{character.location}</div>
                  <h4 className='age'>{character.age}</h4>
                </div>
              </Card>
            ))}
          </div>
          <div className='buttons'>
            {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button> */}
            {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
            {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
            <img className="reject-button" onClick={() => swipe('left')} alt='reject' src={reject} />
            <img className="undo-button" onClick={() => goBack()} alt='undo' src={undo} />
            <img className="like-button" onClick={() => swipe('right')} alt='heart' src={heart} />
          </div>
          {/* {lastDirection ? (
            <h2 key={lastDirection} className='infoText'>
              You swiped {lastDirection}
            </h2>
          ) : (
            <h2 className='infoText'>
              Swipe a card or press a button to get Restore Card button visible!
            </h2>
          )} */}
        </div>
      </React.Fragment>
    )
  }
  
  export default HomePage