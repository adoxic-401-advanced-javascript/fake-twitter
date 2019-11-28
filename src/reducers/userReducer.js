import { MAKE_MESSAGE } from '../actions/userActions';
import { getMessages } from '../services/message';

const getHistoryFromDB = () => {
  return getMessages()
    .then((body) => { 
      console.log(body);
      if(body !== {}) return JSON.parse(body);
      return [];
    }); 
};

const initialState = {
  messages: getHistoryFromDB()
};

export default function reducer(state = initialState, action) {
  
  switch(action.type) {
    case MAKE_MESSAGE:
      return { ...state, messages: [...state.messages, { name: action.name, message: action.payload }] };
    default:
      return state;
  }
}
