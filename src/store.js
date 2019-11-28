import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

const storageMiddleware = store => next => action => {
  next(action);
  const storePostAction = store.getState();
  localStorage.setItem('history', JSON.stringify(storePostAction.user.messages));
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      storageMiddleware,
    ),
  )
);
