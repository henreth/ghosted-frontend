import React, { useState, useMemo, useRef, useEffect } from 'react'
import '../style/homepage.css';
import axios from 'axios';
import undo from '../img/reboot-icon.png';
import heart from '../img/real_heart.png';
import reject from '../img/bones-icon.png';
import location from '../img/location_icon.png';
import Card from './Card';
import image from '../img/abe.jpeg';
import info from '../img/info-icon.png';

// posts 
// upon swiping either direction, creates a 'like' model for the user and targeted profile
let likeUrl = 'http://localhost:4000/like'
let dislikeUrl = 'http://localhost:4000/dislike'

//patches
// upon clicking the undo button, this resets the 'like' model for the user and targeted profile
let undoUrl = 'http://localhost:4000/undo'

  
  function HomePage ({db,setDB,likes,setLikes,currentIndex,setCurrentIndex,lastPerson,setLastPerson,peopleUrl,user}) {
    let [userx,setUserx] = useState('')
    useEffect(()=>{
      axios.get('http://localhost:4000/user')
      .then(r=>setUserx(r.data))
    },[])
    let id = userx.id

    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    
      const childRefs = Array(db.length)
      .fill(0)
      .map((i) => React.createRef())

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < db.length - 1
  
    const canSwipe = currentIndex >= 0

  
    // set last direction and decrease current index
    function swiped (direction, character, index,id){
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
      // console.log(db[index].id)
      // console.log(id)

      if (direction==='right'){
        axios.post(likeUrl,{
          user_id: id,
          profile_id: db[index].id})
        .then(r=>{console.log(r.data)})

      } else if (direction==='left'){
        axios.post(dislikeUrl,{
          user_id: id,
          profile_id: db[index].id})
      }
      setLastPerson(db[index-1])
    }
    
  
    const outOfFrame = (name, idx) => {
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
  
    let swipe = async (dir, character) => {
      if (canSwipe && currentIndex < db.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        if (dir==='right'){

        } else if (dir==='left'){

        }
        // setLastPerson(db[currentIndex])
      }

    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
      setLastPerson(db[newIndex])
      axios.patch(undoUrl,{
        user_id: id,
        profile_id: db[newIndex].id})
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
          <div className='cardContainer'>
            {db.map((character, index) => (
              <Card
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character, index,id)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  className='card'
                >
                  <h3>{character.name} {character.age}</h3>
                  <img className='img' src={character.image}/>
                  {/* <h4>{character.pronouns}</h4> */}
                  {/* <img className = 'location-icon' src={location}/> */}
                  {/* <div className='location-text'>{character.location}</div> */}
                  <div className='description-text'>{character.description.split('').length >50 ? character.description.slice(0,50)+'...':character.description}</div>
                  {/* <h4 className='age'>{character.age}</h4> */}
                  <img className='info-icon' src={info} />

                </div>
              </Card>
            ))}
          </div>
          <div className='buttons'>
            <img className="reject-button" onClick={() => swipe('left')} alt='reject' src={reject} />
            <img className="undo-button" onClick={() => goBack()} alt='undo' src={undo} />
            <img className="like-button" onClick={() => swipe('right')} alt='heart' src={heart} />
           </div>
        </div>
      </React.Fragment>
    )
  }
  
  export default HomePage