import React from 'react';
import facebook from '/facebook.png';
import instagram from '/instagram.png';
import twitter from '/twitter.png';
import './index.scss';

const images = [facebook, instagram, twitter];

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <div className='footer__imageContainer'>
          {images.map((item, index) => {
            return (
              <div className='container'>
                <img
                  key={index}
                  src={item}
                  alt='item'
                  width='25px'
                  height='25px'
                />
              </div>
            );
          })}
        </div>
        <p className='footer__paragraph'>
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
