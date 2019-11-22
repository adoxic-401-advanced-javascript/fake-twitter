import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/login/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();

  const handleChange = ({ target }) => {
    
    dispatch(setUserName(target.value));
  };
  return (
    <div>
      <Login handleChange={handleChange} userName={userName} />
    </div>
  );
};

export default LoginContainer;
