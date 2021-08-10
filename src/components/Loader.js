import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <div className='loader-text'>{this.props.message || 'Loading...'}</div>
      </div>
    );
  }
}

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
