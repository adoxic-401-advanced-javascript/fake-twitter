import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

const Editor = ({ name, handleSubmit }) => {
  const [message, setMessage] = useState();

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit(message);
  };
  return (
    <div className={styles.Editor}>
      <p>{name}</p>
      <form onSubmit={handleFormSubmit}>
        <input name='message' type='text' onChange={({ target }) => setMessage(target.value)}/>
        <button>post message</button>
      </form>
    </div>
  );
};

Editor.propTypes = {
  name: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default Editor;
