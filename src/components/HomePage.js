import React, { useState, useMemo, useRef, useEffect } from 'react'
import '../style/homepage.css';
import axios from 'axios';
import undo from '../img/undo.png';
import heart from '../img/real_heart.png';
import reject from '../img/reject_bones2.png';
import location from '../img/location_icon.png';
import Card from './Card';
import image from '../img/abe.jpeg';
import info from '../img/info_icon.png';

let peopleUrl = 'http://localhost:4000/profiles'
let likesUrl = 'http://localhost:4000/likes'
  
  function HomePage () {

    let [db,setDB] = useState([]);
    let [liked,setLiked] = useState([]);

    
    useEffect(()=>{
      axios.get(peopleUrl)
      .then(r=>{setDB(r.data)
      setCurrentIndex(r.data.length-1)
      setLastPerson(r.data[r.data.length-1])

      axios.get(likesUrl)
      .then(r=>{setLiked(r.data)})
    })
    },[])

    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const [lastPerson, setLastPerson] = useState({})
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
    // const childRefs = useMemo(
    //   async () =>
    //     await Array(db.length)
    //       .fill(0)
    //       .map((i) => React.createRef()),
    //   []
    // )
    
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
      if (direction==='right'){
        setLikes([...likes,lastPerson])
        axios.post(likesUrl,{user_id: 0,
          profile_id: lastPerson.id,
          user_like: true,
          profile_like: null})
        setLiked([...liked,{user_id: 0,
          profile_id: lastPerson.id,
          user_like: true,
          profile_like: null}])

      //   fetch('http://localhost:4000/likes', {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       user_id: 0,
      //       profile_id: lastPerson.id,
      //       user_like: true,
      //       profile_like: null
      //     }),
      // }).then(r=>setLiked([...liked,{user_id: 0,
      //   profile_id: lastPerson.id,
      //   user_like: true,
      //   profile_like: null}]))

      } else if (direction==='left'){
        setRejects([...rejects,lastPerson])
        axios.post(likesUrl,{user_id: 0,
          profile_id: lastPerson.id,
          user_like: false,
          profile_like: null})
        setLiked([...liked,{user_id: 0,
          profile_id: lastPerson.id,
          user_like: false,
          profile_like: null}])
      }
      setLastPerson(db[currentIndex-1])
    }
  
    const outOfFrame = (name, idx) => {
    //   console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
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
          {/* <h1>Ghosted 👻</h1> */}
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
                  <h3>{character.name}</h3>
                  <img className='img' src={image}/>
                  {/* <h4>{character.pronouns}</h4> */}
                  <img className = 'location-icon' src={location}/>
                  <div className='location-text'>{character.location}</div>
                  {/* <h4 className='age'>{character.age}</h4> */}
                  <img className='info-icon' src={info} />
                  {/* <div className='buttons'>
                    <img className="reject-button" onClick={() => swipe('left')} alt='reject' src={reject} />
                    <img className="undo-button" onClick={() => goBack()} alt='undo' src={undo} />
                    <img className="like-button" onClick={() => swipe('right')} alt='heart' src={heart} />
                  </div> */}

                </div>
              </Card>
            ))}
          </div>
          <div className='buttons'>
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