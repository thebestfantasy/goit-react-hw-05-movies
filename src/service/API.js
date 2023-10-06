import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const END_PONT = 'trending/movie/day';
const KEY = '3ebfd305f1e311ddd51156131b9ab9fc';

export const getTrendingMovie = async () => {
  const { data } = await axios(`${END_PONT}?api_key=${KEY}`);
  return data;
};
