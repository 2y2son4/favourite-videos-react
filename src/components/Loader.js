import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/loader.scss';

class Loader extends Component {
  render() {
    return <div className='loader'>{this.props.message || 'Loading...'}</div>;
  }
}

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
