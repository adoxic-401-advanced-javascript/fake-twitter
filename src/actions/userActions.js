export const ADD_USER = 'ADD_USER';

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});

export const MAKE_MESSAGE = 'MAKE_MESSAGE';

export const makeMessage = message => ({
  type: MAKE_MESSAGE,
  payload: message
});
