import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3ebfd305f1e311ddd51156131b9ab9fc';

export const getTrendingMovie = async () => {
  const END_PONT = 'trending/movie/day';
  const { data } = await axios(`${END_PONT}?api_key=${KEY}`);
  return data;
};

export const getMovieInfo = async id => {
  const { data } = await axios(`movie/${id}?api_key=${KEY}`);
  return data;
};

export const getMoviesByName = async query => {
  const { data } = await axios(
    `search/movie?query=${query}&include_adult=true&page=1&api_key=${KEY}`
  );
  return data;
};

export const getCast = async id => {
  const { data } = await axios(`movie/${id}/credits?api_key=${KEY}`);
  return data;
};

export const getReviews = async id => {
  const { data } = await axios(`movie/${id}/reviews?api_key=${KEY}`);
  return data;
};
