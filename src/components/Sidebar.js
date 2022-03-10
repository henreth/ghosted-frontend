import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../style/sidebar.css';
import MiniCard from './MiniCard';
import userPhoto from '../img/melting-ghost.png'
import location from '../img/location_icon.png';


function Sidebar({matches,setMatches,user}) {

    let matchesToDisplay = matches.map(match=>{
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

            <img src={userPhoto} className='profile-photo-sidebar'/>
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
            {matchesToDisplay}
            </div>
        </Menu>
      </div>
  );
};

export default Sidebar;