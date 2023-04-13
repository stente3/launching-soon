import React from 'react';
/* Components */
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
/* Styles */
import './index.scss';

const App = () => {
  return (
    <div className='appContainer'>
      <Header />
      {/* <Main />
      <Footer /> */}
    </div>
  );
};

export default App;
