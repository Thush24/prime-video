import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import UserConfig from './UserConfig';
import './style.css';
import logo from '../../images/primeLogo.png';

function Header() {
  return (
    <>
      <header className="Header">
        <div className="logoMenuContainer">
          <img src={logo} alt="Prime Logo" />
          <ul className="Menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">TV Shows</Link></li>
            <li><Link to="/">Movies</Link></li>
            <li><Link to="/">Channels</Link></li>
            <li><Link to="/">Categories</Link></li>
          </ul>
        </div>
        <div className="searchConfigContainer">
          <Searchbar className="Searchbar" />
          <UserConfig className="UserConfig" />
        </div>
      </header>
    </>
  );
}

export default Header;
