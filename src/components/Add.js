import React, { Component } from 'react';
import { addVideo } from '../api';
import PropTypes from 'prop-types';

import '../styles/add.scss';

class Add extends Component {
  render() {
    const { onClose } = this.props;
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-content-flex'>
            <h2> Crear nuevo Vídeo </h2>{' '}
            <span className='close' onClick={onClose(false)}>
              <i class='zmdi zmdi-close'></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Add;
