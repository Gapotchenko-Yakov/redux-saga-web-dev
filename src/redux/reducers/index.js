import { combineReducers } from "redux";
import news from "./news";
import errors from "./errors";

export const reducer = combineReducers({
  news: news,
  errors: errors,
});

export default reducer;
