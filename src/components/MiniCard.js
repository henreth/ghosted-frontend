import React from 'react'
import '../style/minicard.css';
import { Route, Link, useHistory } from "react-router-dom";
import cancel from '../img/cancel-icon.png';


function MiniCard ({profile,showMoreProfileInfo,setShowMoreProfileInfo,setSelectedMatch,setShowMoreUserInfo}) {

    let history = useHistory();

    // function handleInfoClick(){
    //     history.push(`/match/${profile.id}`)
    //     window.location.reload()
    // }

    // function handleDeleteClick(){
    //     console.log('deleted')
    // }

    function handleOpenInfo(){
        setShowMoreProfileInfo(true)
        setSelectedMatch(profile)
        setShowMoreUserInfo(false)
    }

    return (
        <div className='mini-cardContainer'>
                <div
                    className='mini-card'
                >
                    <div className='mini-name'>{profile.name}</div>
                    <img className='mini-img' src={profile.image} onClick={handleOpenInfo}/>
                    {/* <img className='cancel-button' src={cancel} onClick={handleInfoClick}/> */}
                </div>
      </div>
    )
}

export default MiniCard;