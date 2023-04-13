import React from 'react';
import Form from './Form';
import illustration from '/illustration-dashboard.png';

const Main = () => {
  return (
    <React.Fragment>
      <main>
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
        <Form />
        <img src={illustration} alt='illustration dashboard' />
      </main>
    </React.Fragment>
  );
};

export default Main;
