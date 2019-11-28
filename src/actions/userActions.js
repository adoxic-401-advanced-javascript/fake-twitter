export const MAKE_MESSAGE = 'MAKE_MESSAGE';

export const makeMessage = (message, name) => ({
  type: MAKE_MESSAGE,
  payload: message,
  name: name,
});
