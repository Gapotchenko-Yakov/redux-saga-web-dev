import { combineReducers } from "redux";
import counter from "./counter";
import news from "./news";

export const reducer = combineReducers({
  counter: counter,
  news: news,
});

export default reducer;
