// React
import React from 'react';

// styles
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer__span'>
        Design & code by {''}
        <a className='footer__span--link' href='https://github.com/2y2son4' target='_blank' rel='noreferrer'>
          2y2son4{'  '}
        </a>
        👽
      </span>
    </footer>
  );
};

export default React.memo(Footer);
