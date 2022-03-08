import React from 'react'
import '../style/largecard.css';


function LargeCard ({character}) {
    return (
        <div className='med-cardContainer'>
                <div
                    className='med-card'
                >
                    {/* <div className='mini-name'>{character.name}</div> */}
                    <img className='med-img' src={character.image}/>
                </div>
      </div>
    )
}

export default LargeCard;