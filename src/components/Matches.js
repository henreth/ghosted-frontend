import React, {useState } from 'react'
import '../style/matches.css';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import heart from '../img/real_heart.png';



function Matches({matches,setMatches}){
    document.title='Ghostd - Matches'
    let matchesToDisplay = matches.map(match=>{
        return (
            //update to fetch individual profiles
            <MediumCard key={match.name} character={match} />
        )
    })

    return(
        <React.Fragment>
            <div className='matches-container'>
                <h1>Matches</h1>
                <img className="mini-heart" src={heart} />

                <div className='matches-carousel'> 
                    {matchesToDisplay}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Matches;