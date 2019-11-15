import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.css';

const Login = () => {
  return (
    <section className={styles.Login}>
      <input type='text' placeholder='type your user name here' maxLength='30' />
      <button>go!</button>
    </section>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func
};

export default Login;
