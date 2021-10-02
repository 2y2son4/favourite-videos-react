import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/header.scss';

const Header = () => (
  <div className='header-content'>
    <div className='header-title-text'>Favourite videos</div>
    <div>
      <div className='header-button-add'>
        <i className='zmdi zmdi-plus'></i>
        <span>Add 📼</span>
      </div>
      <Link to='/about'>
        <div className='header-button-about'>
          <i className='zmdi zmdi-more'></i>
          <span>About 👩‍💻</span>
        </div>
      </Link>
    </div>
  </div>
);

export default Header;
