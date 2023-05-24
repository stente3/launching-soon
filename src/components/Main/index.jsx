import React from 'react';
import Form from '../Form';
import illustration from '/illustration-dashboard.png';
import './index.scss';

const Main = () => {
  return (
    <React.Fragment>
      <main className='main'>
        <h1 className='main__header'>
          We are launching <span>soon!</span>
        </h1>
        <p className='main__paragraph'>Subscribe and get notified</p>
        <div className='main__buttonContainer'>
          <Form />
        </div>
        <figure className='main__figure'>
          <img src={illustration} alt='illustration dashboard' />
        </figure>
      </main>
    </React.Fragment>
  );
};

export default Main;
