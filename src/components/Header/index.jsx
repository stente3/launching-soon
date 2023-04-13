import React from 'react';
import logo from '/logo.svg';
const Header = () => {
  return (
    <React.Fragment>
      <h1>Hola mundo</h1>
      <img src={logo} alt='logo' />
    </React.Fragment>
  );
};
export default Header;
