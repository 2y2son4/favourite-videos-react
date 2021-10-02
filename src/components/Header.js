import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import '../styles/header.scss';

const Header = ({ onClickAdd }) => (
  <div className='header-content'>
    <div className='header-title-text'>Favourite videos</div>
    <div>
      <div className='header-button-add'>
        <input type='button' onClick={onClickAdd} />
        <i className='zmdi zmdi-plus'></i>
        <span>Add</span>
      </div>

      <Link to='/about'>
        <div className='header-button-about'>
          <i className='zmdi zmdi-more'></i>
          <span>About</span>
        </div>
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default Header;
