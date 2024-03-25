import {
  takeEvery,
  put,
  call,
  fork,
  all,
  race,
  spawn,
} from "@redux-saga/core/effects";
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  GET_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
} from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  try {
    const data = yield call(getLatestNews, 4);
    yield put(setLatestNews(data));
  } catch (e) {
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: "Error fetching latest news.",
    });
  }
}

export function* handlePopularNews() {
  try {
    const data = yield call(getPopularNews, 10);
    yield put(setPopularNews(data));
  } catch (e) {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: "Error fetching popular news.",
    });
  }
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
