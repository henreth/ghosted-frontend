import React, {useState } from 'react'
import '../style/matches.css';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import heart from '../img/real_heart.png';



function Matches({matches,setMatches}){
    document.title='Ghostd - Matches'

    function displayMatches(data){
        if(data.length>=20){
            return (
                <React.Fragment>
                    <div className='matches-carousel'> 
                        {data.slice(0,5).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(5,10).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(10,15).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(15,20).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(20,).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                </React.Fragment>
            )
        } else if(data.length>=15){
            return (
                <React.Fragment>
                    <div className='matches-carousel'> 
                        {data.slice(0,5).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(5,10).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(10,15).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(15,).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard key={match.name} character={match} />
                            )
                        })}
                    </div>
                </React.Fragment>
            )
    } else if(data.length>=10){
        return (
            <React.Fragment>
                <div className='matches-carousel'> 
                    {data.slice(0,5).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(5,10).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(10,).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    } else if(data.length>=5){
        return (
            <React.Fragment>
                <div className='matches-carousel'> 
                    {data.slice(0,5).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(5,).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className='matches-carousel'> 
                    {data.map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard key={match.name} character={match} />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
    // let matchesToDisplay = matches.map(match=>{
    //     return (
    //         //update to fetch individual profiles
    //         <MediumCard key={match.name} character={match} />
    //     )
    // })

    return(
        <React.Fragment>
            <div className='matches-container'>
                <h1 className='matches-title'>Matches</h1>
                <img className="mini-heart" src={heart} />
                {/* <div className='matches-carousel'> 
                    {matchesToDisplay}
                </div> */}
                {displayMatches(matches)}
            </div>
        </React.Fragment>
    );
}

export default Matches;