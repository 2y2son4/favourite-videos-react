// React
import React from 'react';

// styles
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__paragraph'>
        Design & code by {''}
        <a className='footer__paragraph--link' href='https://github.com/2y2son4' target='_blank' rel='noreferrer'>
          2y2son4{'  '}
        </a>
        👽{' '}
      </p>
      <p className='footer__paragraph'>
        && Thanks to
        <a className='footer__paragraph--link' href='https://codely.tv/' target='_blank' rel='noreferrer'>
          {' '}
          CodelyTV{' '}
        </a>
      </p>
      <p className='footer__paragraph'>
        || You can check the code{' '}
        <a
          className='footer__paragraph--link'
          href='https://github.com/2y2son4/favourite-videos-react'
          target='_blank'
          rel='noreferrer'
        >
          HERE{' '}
        </a>
      </p>
    </footer>
  );
};

export default React.memo(Footer);
