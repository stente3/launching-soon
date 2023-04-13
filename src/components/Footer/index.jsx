import React from 'react';
import facebook from '/facebook-f.svg';
import instagram from '/instagram.svg';
import twitter from '/twitter.svg';

const images = [facebook, instagram, twitter];

const Footer = () => {
  return (
    <React.Fragment>
      {images.map((item, index) => {
        return <img key={index} src={item} alt='item' />;
      })}
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </React.Fragment>
  );
};

export default Footer;
