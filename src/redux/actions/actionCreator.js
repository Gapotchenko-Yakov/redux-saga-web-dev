import { GET_NEWS, SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";

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
