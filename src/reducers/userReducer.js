import { ADD_USER, MAKE_MESSAGE } from '../actions/userActions';

const isHistoryInLocal = () => {
  if(localStorage.getItem('history')) return JSON.parse(localStorage.getItem('history'));
  return [];
};

const initialState = {
  userName: '',
  messages: isHistoryInLocal()
};

export default function reducer(state = initialState, action) {
  
  switch(action.type) {
    case ADD_USER:
      return { ...state, userName: action.payload };
    case MAKE_MESSAGE:
      console.log(state.messages);
      return { ...state, messages: [...state.messages, { name: state.userName, message: action.payload }] };
    default:
      return state;
  }
}
