import React from 'react'
import '../style/mediumcard.css';



function MediumCard ({character}) {
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

export default MediumCard;