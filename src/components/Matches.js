import React, {useState } from 'react'
import '../style/matches.css';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import MoreMatchInfo from './MoreMatchInfo';
import heart from '../img/real_heart.png';



function Matches({matches,user,setMatches}){
    document.title='Ghostd - Matches'

    let [showMoreProfileInfo, setShowMoreProfileInfo] = useState(false);
    let [selectedMatch,setSelectedMatch] = useState(user);


    function displayMatches(data){
        if(data.length>=20){
            return (
                <React.Fragment>
                    <div className='matches-carousel'> 
                        {data.slice(0,5).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />
                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(5,10).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(10,15).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(15,20).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(20,).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
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
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(5,10).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(10,15).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
                        })}
                    </div>
                    <div className='matches-carousel'> 
                        {data.slice(15,).map(match=>{
                            return (
                                //update to fetch individual profiles
                                <MediumCard 
                                    key={match.name} 
                                    profile={match}
                                    matches={setMatches}
                                    setMatches={setMatches}                
                                    showMoreProfileInfo={showMoreProfileInfo}
                                    setShowMoreProfileInfo={setShowMoreProfileInfo}
                                    setSelectedMatch={setSelectedMatch}
                                />                            )
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
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                        />                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(5,10).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                        />                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(10,).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                        />                        )
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
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                        />                        )
                    })}
                </div>
                <div className='matches-carousel'> 
                    {data.slice(5,).map(match=>{
                        return (
                            //update to fetch individual profiles
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                        />                        )
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
                            <MediumCard 
                            key={match.name} 
                            profile={match}                
                            showMoreProfileInfo={showMoreProfileInfo}
                            setShowMoreProfileInfo={setShowMoreProfileInfo}
                            setSelectedMatch={setSelectedMatch}
                       />                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
    // let matchesToDisplay = matches.map(match=>{
    //     return (
    //         //update to fetch individual profiles
    //         <MediumCard key={match.name} profile={match} />
    //     )
    // })

    return(
        <React.Fragment>
            {/* {showMoreProfileInfo?<MoreMatchInfo showMoreProfileInfo={showMoreProfileInfo} setShowMoreProfileInfo={setShowMoreProfileInfo} profile={selectedMatch}/>:null} */}
            {showMoreProfileInfo?<React.Fragment><div className='matches-moreMatchInfo-curtain'>-</div> <MoreMatchInfo size={'m'} matches={matches} setMatches={setMatches} showMoreProfileInfo={showMoreProfileInfo} setShowMoreProfileInfo={setShowMoreProfileInfo} profile={selectedMatch} nameLength={selectedMatch.name.length} locationLength={selectedMatch.location.length}/></React.Fragment>:null}

            <div className='matches-container'>
                <h1 className='matches-title'>Matches</h1>
                {/* <div className='matches-carousel'> 
                    {matchesToDisplay}
                </div> */}
                {displayMatches(matches)}
            </div>
        </React.Fragment>
    );
}

export default Matches;