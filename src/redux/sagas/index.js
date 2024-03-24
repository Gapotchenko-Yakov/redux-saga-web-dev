import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
} from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS } from "../constants";
import { getLatestNews } from "../../api";

// const delay = (time) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log("🚀 ~ function*workerSaga ~ data:", data);

  // const count = yield select(({ counter }) => counter.count);
  // yield delay(2);
  // console.log(`request ${count}`);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
