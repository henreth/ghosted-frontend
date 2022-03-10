import React from 'react'
import '../style/minicard.css';
import { Route, Link, useHistory } from "react-router-dom";
import cancel from '../img/cancel-icon.png';


function MiniCard ({character}) {

    let history = useHistory();

    function handleInfoClick(){
        history.push(`/match/${character.id}`)
        window.location.reload()
    }

    function handleDeleteClick(){
        console.log('deleted')
    }

    return (
        <div className='mini-cardContainer'>
                <div
                    className='mini-card'
                >
                    <div className='mini-name'>{character.name}</div>
                    <img className='mini-img' src={character.image} onClick={handleInfoClick}/>
                    <img className='cancel-button' src={cancel} onClick={handleInfoClick}/>
                </div>
      </div>
    )
}

export default MiniCard;