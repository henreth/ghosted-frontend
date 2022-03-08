import React, { useState, useMemo, useRef, useEffect } from 'react'
import '../style/homepage.css';
import axios from 'axios';
import undo from '../img/undo.png';
import heart from '../img/real_heart.png';
import reject from '../img/reject_bones2.png';
import location from '../img/location_icon.png';
import Card from './Card';
import image from '../img/abe.jpeg';
import info from '../img/info-icon.png';

  
  function HomePage ({db,setDB,liked,setLiked,currentIndex,setCurrentIndex,lastPerson,setLastPerson,peopleUrl,likesUrl}) {

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
    const swiped = (direction, character, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
      console.log(db[index-1])
      if (direction==='right'){
        console.log(lastPerson)
        setLikes([...likes,lastPerson])
        axios.post(likesUrl,{
          user_id: 0,
          profile_id: lastPerson.id})
        setLiked([...liked,{
          user_id: 0,
          profile_id: lastPerson.id,
          user_like: true,
          profile_like: null}])

      } else if (direction==='left'){
        setRejects([...rejects,lastPerson])
        axios.post(likesUrl,{
          user_id: 0,
          profile_id: lastPerson.id})
        setLiked([...liked,{
          user_id: 0,
          profile_id: lastPerson.id,
          user_like: false,
          profile_like: null}])
      }
      setLastPerson(db[index-1])
    }
  
    const outOfFrame = (name, idx) => {
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    let [likes,setLikes] = useState([])
    let [rejects,setRejects] = useState([])
  
    const swipe = async (dir, character) => {
      if (canSwipe && currentIndex < db.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        if (dir==='right'){
          setLikes([...likes,lastPerson])
        } else if (dir==='left'){
          setRejects([...rejects,lastPerson])
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
      axios.patch(likesUrl+`/${lastPerson.likeId}`, {user_like: null})
      .then(r=>{
        setLiked(liked.filter(like=>{
         return like.profile_id == lastPerson.id
        }))

      })
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
                onSwipe={(dir) => swiped(dir, character, index)}
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