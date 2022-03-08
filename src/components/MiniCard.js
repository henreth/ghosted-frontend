import React from 'react'
import '../style/minicard.css';



function MiniCard ({character}) {
    return (
        <div className='mini-cardContainer'>
                <div
                    style={{ backgroundImage: 'url(' + character.url + ')' }}
                    className='mini-card'
                >
                    {/* <div className='mini-name'>{character.name}</div> */}
                    <img className='mini-img' src={character.image}/>
                </div>
      </div>
    )
}

export default MiniCard;