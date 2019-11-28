import { post, get } from './request';

const MESSAGE_URL = 'http://morning-crag-24036.herokuapp.com';

export const sendMessage = (message, username) => post(`${MESSAGE_URL}/message`,
  { message, username });

export const getMessages = () => get(`${MESSAGE_URL}/message`);

