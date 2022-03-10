import React, { useState } from 'react'
import '../style/largecard.css';
import location from '../img/location_icon.png';





function LargeCard ({profile,nameLength,locationLength}) {

    return (
        <div className='large-cardContainer'>
            <div className='large-card'>
            <img className='large-img' src={profile.image}/>
                <div className='info-box'>
                    <h1 className={nameLength > 10?'card-title-long':'card-title'}>{profile.name}</h1>
                    <h3 className={locationLength > 15? 'card-location-long':'card-location'}><img className ='location-icon-here' src={location}/>{profile.location}</h3>
                    <h3 className='card-subtitle'>{profile.pronouns} - {profile.age} years dead</h3>
                    <hr></hr>
                    <p className='card-text'>{profile.description}</p>
                    <button className='button'>Unmatch</button>
                </div>
            </div>
      </div>
    )
}

export default LargeCard;