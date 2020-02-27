import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions";

const initialState = { count: 0 };

export default function countApp(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
