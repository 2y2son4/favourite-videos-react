import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/header.scss';

const Header = () => (
  <div className='header-content'>
    <div className='header-title-text'>Favourite videos</div>
    <div>
      <input type='button' value='Añadir Video' className='header-button-add' />
      <Link to='/about'>
        <div className='header-button-about'>About</div>
      </Link>
    </div>
  </div>
);

export default Header;
