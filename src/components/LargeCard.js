import React from 'react'
import '../style/largecard.css';


function LargeCard ({profile}) {
    return (
        <div className='large-cardContainer'>
                <div
                    className='large-card'
                >
                    {/* <div className='mini-name'>{profile.name}</div> */}
                    <img className='large-img' src={profile.image}/>
                </div>
      </div>
    )
}

export default LargeCard;