import React from 'react'
import '../style/mediumcard.css';
import { Route, Link, useHistory } from "react-router-dom";




function MediumCard ({character}) {
    let history = useHistory();

    function handleInfoClick(){
        history.push(`/match/${character.id}`)
    }
    return (
        <div className='med-cardContainer'>
                <div
                    className='med-card'
                >
                    {/* <div className='mini-name'>{character.name}</div> */}
                    <img className='med-img' onClick={handleInfoClick} src={character.image}/>

                </div>
      </div>
    )
}

export default MediumCard;