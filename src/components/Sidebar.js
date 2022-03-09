import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../style/sidebar.css';
import MiniCard from './MiniCard';

function Sidebar({matches,setMatches}) {

    let matchesToDisplay = matches.map(match=>{
        return (
            //update to fetch individual profiles
            <MiniCard character={match} />
        )
    })

  return (
      <div className='menu-test'>
        <Menu>
            {/* <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/profile">
                Profile
            </a> */}
            <a className="large-menu-item" href="/matches">
                Matches
            </a>
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