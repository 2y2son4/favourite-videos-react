import React from 'react';
// import PropTypes from 'prop-types';

// styles
import '../styles/header.scss';

const Header = () => (
  <div className='header-content'>
    <div className='header-title-text'>Favourite videos</div>
    <input type='button' value='Añadir Video' className='header-button-add' />
  </div>
);

export default Header;
