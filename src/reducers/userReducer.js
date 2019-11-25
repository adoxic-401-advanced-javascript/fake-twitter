import { MAKE_MESSAGE } from '../actions/userActions';

const isHistoryInLocal = () => {
  if(localStorage.getItem('history')) return JSON.parse(localStorage.getItem('history'));
  return [];
};

const initialState = {
  messages: isHistoryInLocal()
};

export default function reducer(state = initialState, action) {
  
  switch(action.type) {
    case MAKE_MESSAGE:
      return { ...state, messages: [...state.messages, { name: action.name, message: action.payload }] };
    default:
      return state;
  }
}
