import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../styles/loader.scss';

// PureComponent en lugar de Component para evitar que se renderice más de una vez el mismo componente si no ha sufrido cambios

class Loader extends PureComponent {
  // componentDidMount() {
  //   const speed = this.props.speed || 90;

  //   // $ hace referencia al DOM
  //   this.typed = new Typed(this.$loading, {
  //     strings: [this.props.message],
  //     typeSpeed: parseInt(speed),
  //   });
  // }

  // // hay que destruir el componente una vez que ya no se use. SI no se destruye el typing se quedaría
  // componentWillUnmount() {
  //   this.typed.destroy();
  // }

  render() {
    return (
      // el se genera al crearse el componente en el virtual DOM, y él automáticamente se lo pasa al componente
      // el atributo ref es importante: no es un atributo nativo de HTML, al trabajar en REACT se encarga de pasar automáticamente el elemento del DOM
      <div
        className='loader'
        //ref={(el) => (this.$loading = el)}
      >
        <div className='loader-text'>{this.props.message || 'Loading...'}</div>
        <div className='loader-spinner'>
          <i className='zmdi zmdi-spinner zmdi-hc-spin'></i>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  message: PropTypes.string,
  speed: PropTypes.number,
};

export default Loader;
