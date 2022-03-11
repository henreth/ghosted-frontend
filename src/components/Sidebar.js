import React, {useState} from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../style/sidebar.css';
import MiniCard from './MiniCard';
import MoreProfileInfo from './MoreProfileInfo';
import userPhoto from '../img/userPhoto.jpeg';
import location from '../img/location_icon.png';


function Sidebar({matches,setMatches,user}) {
    let [showMoreProfileInfo, setShowMoreProfileInfo] = useState(false);

    function handleClickProfile(){
        setShowMoreProfileInfo(!showMoreProfileInfo)
    }

    let matchesFirstColumn = matches.filter((match,index)=>index%2===0)
    let matchesSecondColumn = matches.filter((match,index)=>index%2!==0)

    let matchesToDisplay = matches.map((match)=>{
        return (
            //update to fetch individual profiles
            <MiniCard 
                key={match.name}
                character={match} />
        )
    })

    let firstColumnToDisplay = matchesFirstColumn.map((match)=>{
        return (
            //update to fetch individual profiles
            <MiniCard 
                key={match.name}
                character={match} />
        )
    })

    let secondColumnToDisplay = matchesSecondColumn.map((match)=>{
        return (
            //update to fetch individual profiles
            <MiniCard 
                key={match.name}
                character={match} />
        )
    })
    

  return (
      <div className='menu-holder'>
        <Menu>
            {showMoreProfileInfo? <MoreProfileInfo showMoreProfileInfo={showMoreProfileInfo} setShowMoreProfileInfo={setShowMoreProfileInfo} profile={user} /> : null}
            <img src={userPhoto} onClick={handleClickProfile} className='profile-photo-sidebar'/>
            <a className="spacing-menu-item">'</a>
            <div className='profile-name-sidebar'>{user.name}</div>
            <img className = 'profile-location-icon-sidebar' src={location}/>
            <div className='profile-location-sidebar'>{user.location}</div>
            <div className='sidebar-title'> 
                <a className="large-menu-item" href="/matches">Matches</a>
            </div>
            
            {/* <a className="menu-item" href="/settings">
                Settings
            </a> */}
            <div className='minicards-container'> 
                {firstColumnToDisplay}
            </div>
            <div className='minicards-container-secondColumn'>
                {secondColumnToDisplay}
            </div>

        </Menu>
      </div>
  );
};

export default Sidebar;