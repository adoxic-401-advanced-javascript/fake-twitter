import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const storageMiddleware = store => next => action => {
  
  next(action);
  const storePostAction = store.getState();
  localStorage.setItem('history', JSON.stringify(storePostAction.user.messages));
};

export default createStore(
  reducer,
  applyMiddleware(
    storageMiddleware,
  ),
);
