import React from 'react';

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} action='get'>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Your email address...'
          required
        />
        <button>Notify Me</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
