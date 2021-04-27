import React from 'react';
import { Link } from 'react-router-dom';
import {FormButton} from "../components/forms/Button";


const Header = () => {
  return (
    <header>
      <div className="navigation-div">
        <div id="branding">
          <Link to="/">
            <img alt={'logo'} src={require('../assets/Elivate9ja/Elivate9ja-01.svg')} width={'80%'} height={'80px'}/>
          </Link>
        </div>
        <img className={'burger-icon'} alt={'burger icon'} src={require('../assets/icons/Menu.svg')}/>
        <nav className="menu">
          <ul className="navigation-items">
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/raffles">Raffles</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/">Help & FAQs</Link>
            </li>
            <li>
              <Link to="/">Charity</Link>
            </li>
            <li>
              <Link to="/">Winners</Link>
            </li>
            <li>
              <a href="/login">
                <Link to="/login">Login</Link>
              </a>
            </li>
            <li className={""}>
              <button className={`paragraph-bold text-align-center header-button`} >Sign up</button>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
