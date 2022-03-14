import React, { useState } from 'react'
import '../style/matches.css';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import MoreMatchInfo from './MoreMatchInfo';
import heart from '../img/real_heart.png';



function Matches({ matches, user, setMatches }) {
    document.title = 'Ghostd - Matches'

    let [showMoreProfileInfo, setShowMoreProfileInfo] = useState(false);
    let [selectedMatch, setSelectedMatch] = useState(user);

    let filteredMatches = matches;

    function displayMatchesRow(data) {
        return <div className='matches-carousel'>
            {data.map(match => {
                return (
                    //update to fetch individual profiles
                    <MediumCard
                        key={match.name}
                        profile={match}
                        showMoreProfileInfo={showMoreProfileInfo}
                        setShowMoreProfileInfo={setShowMoreProfileInfo}
                        setSelectedMatch={setSelectedMatch} />);
            })}
        </div>;
    }

    function displayMatches(data) {
        if (data.length >= 20) {
            return (
                <React.Fragment>
                    {displayMatchesRow(data.slice(0, 5))}
                    {displayMatchesRow(data.slice(5, 10))}
                    {displayMatchesRow(data.slice(10, 15))}
                    {displayMatchesRow(data.slice(15, 20))}
                    {displayMatchesRow(data.slice(20, ))}
                </React.Fragment>
            )
        } else if (data.length >= 15) {
            return (
                <React.Fragment>
                    {displayMatchesRow(data.slice(0, 5))}
                    {displayMatchesRow(data.slice(5, 10))}
                    {displayMatchesRow(data.slice(10, 15))}
                    {displayMatchesRow(data.slice(15,))}
                </React.Fragment>
            )
        } else if (data.length >= 10) {
            return (
                <React.Fragment>
                    {displayMatchesRow(data.slice(0, 5))}
                    {displayMatchesRow(data.slice(5, 10))}
                    {displayMatchesRow(data.slice(10,))}
                </React.Fragment>
            )
        } else if (data.length >= 5) {
            return (
                <React.Fragment>
                    {displayMatchesRow(data.slice(0, 5))}
                    {displayMatchesRow(data.slice(5,))}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {displayMatchesRow(data)}
                </React.Fragment>
            )
        }
    }


    return (
        <React.Fragment>
            {showMoreProfileInfo ? <React.Fragment><div className='matches-moreMatchInfo-curtain'>-</div> <MoreMatchInfo size={'m'} matches={matches} setMatches={setMatches} showMoreProfileInfo={showMoreProfileInfo} setShowMoreProfileInfo={setShowMoreProfileInfo} profile={selectedMatch} nameLength={selectedMatch.name.length} locationLength={selectedMatch.location.length} /></React.Fragment> : null}
            <h1 className='matches-title'>Matches</h1>
            <div className='matches-container'>
                {displayMatches(matches)}
            </div>
        </React.Fragment>
    );
    
}

export default Matches;