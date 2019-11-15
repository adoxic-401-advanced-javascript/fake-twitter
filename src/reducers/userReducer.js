import { ADD_USER } from '../actions/userActions';

const initialState = {
  userName: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}
