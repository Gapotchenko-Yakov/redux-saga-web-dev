import { combineReducers } from "redux";

const initialState = {
  test: {},
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducer = combineReducers({ test: testReducer });

export default reducer;
