import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../style/sidebar.css';

export default props => {
  return (
      <div className='menu-test'>
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/profile">
                Profile
            </a>
            <a className="menu-item" href="/matches">
                Matches
            </a>
            <a className="menu-item" href="/settings">
                Settings
            </a>
        </Menu>
      </div>
  );
};
