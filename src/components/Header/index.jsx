import React from 'react';
/* Assets */
import logo from '/logo.svg';
/* Styles */
import './index.scss';

const Header = () => {
  return (
    <React.Fragment>
      <figure className='header'>
        <img className='header__image' src={logo} alt='logo' title='Ping' />
      </figure>
    </React.Fragment>
  );
};
export default Header;
