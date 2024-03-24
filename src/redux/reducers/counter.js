import { DECREASE_COUNT, INCREASE_COUNT } from "../constants";

const initialState = {
  count: 0,
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
