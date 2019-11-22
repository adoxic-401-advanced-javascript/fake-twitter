import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Login.css';

const Login = ({ handleChange, userName }) => {
  
  return (
    <section className={styles.Login}>
      <input type='text' placeholder='type your user name here' maxLength='30' onChange={handleChange}/>
      <Link to={`/user/${userName}`}>
        <button type='button' className={styles.button}>go!</button>
      </Link>
    </section>
  );
};

Login.propTypes = {
  userName: PropTypes.string,
  handleChange: PropTypes.func
};

export default Login;
