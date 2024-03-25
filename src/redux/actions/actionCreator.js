import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
} from "../constants";

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});

export const getPopularNews = () => ({
  type: GET_POPULAR_NEWS,
});

export const setLatestNews = (news) => ({
  type: SET_LATEST_NEWS,
  payload: news,
});

export const setPopularNews = (news) => ({
  type: SET_POPULAR_NEWS,
  payload: news,
});
