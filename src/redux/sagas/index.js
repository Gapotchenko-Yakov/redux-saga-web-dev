import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  put,
  call,
} from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS } from "../constants";
import { getLatestNews } from "../../api";
import { setLatestNews } from "../actions/actionCreator";

// const delay = (time) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });

export function* handleLatestNews() {
  //workerSaga
  const data = yield call(getLatestNews, 4);
  yield put(setLatestNews(data));

  // const count = yield select(({ counter }) => counter.count);
  // yield delay(2);
  // console.log(`request ${count}`);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
