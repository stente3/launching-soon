import React from 'react';
import { useState } from 'react';
import './index.scss';

const Form = () => {
  const [emailError, setEmailError] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    event.target.set;
  }
  function handleButtonClick() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      // El correo no contiene los símbolos '@' y '.'
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }
  const handleInvalid = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form className='form' onSubmit={handleSubmit} action='get'>
        <input
          className={emailError ? 'form__input wrongEmail' : 'form__input'}
          type='email'
          id='email'
          name='email'
          placeholder='Your email address...'
          autoComplete='off'
          onInvalid={handleInvalid}
          required
        />
        {emailError && (
          <p className='error-text'>Please provide a valid email address</p>
        )}
        <button className='form__button' onClick={handleButtonClick}>
          Notify Me
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
