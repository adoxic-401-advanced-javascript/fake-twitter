import React from 'react';
import Login from './login/Login';
import resetCss from '../reset.css';

const App = () => {
  return (
    <div className={resetCss}>
      <Login />
    </div>
  );
};

export default App;
