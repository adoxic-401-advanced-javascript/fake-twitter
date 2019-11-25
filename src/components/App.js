import React from 'react';
import { BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import FeedContainer from '../containers/FeedContainer';
import resetCss from '../reset.css';

const App = () => {
  return (
    <Router>
      <div className={resetCss}>
        <Route exact path='/'>
          <LoginContainer />
        </Route>
        <Route path='/user/:userName'>
          <FeedContainer />
        </Route>
      </div>

    </Router>
  );
};

export default App;
