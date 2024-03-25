import {
  DECREASE_COUNT,
  GET_NEWS,
  INCREASE_COUNT,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
} from "../constants";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getNews = () => ({
  type: GET_NEWS,
});

export const setLatestNews = (news) => ({
  type: SET_LATEST_NEWS,
  payload: news,
});

export const setPopularNews = (news) => ({
  type: SET_POPULAR_NEWS,
  payload: news,
});
