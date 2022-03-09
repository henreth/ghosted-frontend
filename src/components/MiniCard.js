import React from 'react'
import '../style/minicard.css';
import { Route, Link, useHistory } from "react-router-dom";


function MiniCard ({character}) {

    let history = useHistory();

    function handleInfoClick(){
        history.push(`/match/${character.id}`)
        window.location.reload()
    }

    return (
        <div className='mini-cardContainer'>
                <div
                    className='mini-card'
                >
                    {/* <div className='mini-name'>{character.name}</div> */}
                    <img className='mini-img' src={character.image} onClick={handleInfoClick}/>
                </div>
      </div>
    )
}

export default MiniCard;