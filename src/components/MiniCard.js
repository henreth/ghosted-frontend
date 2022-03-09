import React from 'react'
import '../style/minicard.css';



function MiniCard ({character}) {
    return (
        <div className='mini-cardContainer'>
                <div
                    className='mini-card'
                >
                    {/* <div className='mini-name'>{character.name}</div> */}
                    <img className='mini-img' src={character.image}/>
                </div>
      </div>
    )
}

export default MiniCard;