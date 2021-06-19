import { 
  INCREMENT, 
  DECREMENT, 
  RESET
} from './actionType';

const initialState = {
  count:0
}

const HomeScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count:state.count + 1};
    case DECREMENT:
      return {...state, count:state.count - 1};
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default HomeScreenReducer;

