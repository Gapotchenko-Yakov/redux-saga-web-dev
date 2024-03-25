import {
  takeEvery,
  put,
  call,
  fork,
  all,
  race,
} from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT, GET_NEWS } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  const data = yield call(handleLatestNews, 4);
  yield put(setLatestNews(data));
}

export function* handlePopularNews() {
  const data = yield call(getPopularNews, 10);
  yield put(setPopularNews(data));
}

export function* handleNews() {
  //workerSaga
  // yield all([call(handleLatestNews), call(handlePopularNews)]);
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
