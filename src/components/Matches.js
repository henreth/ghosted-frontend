import React, {useState } from 'react'
import '../style/matches.css';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';



function Matches({matches,setMatches}){
    document.title='Ghostd - Matches'
    let matchesToDisplay = matches.map(match=>{
        return (
            //update to fetch individual profiles
            <LargeCard character={match} />
        )
    })

    return(
        <React.Fragment>
            <div className='matches-container'>
                <h1>Matches</h1>
                <div className='matches-carousel'> 
                    {matchesToDisplay}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Matches;