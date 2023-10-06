import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/API';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const trendingApi = async () => {
      setIsLoading(true);

      try {
        const dataMovie = await getTrendingMovie();
        setData(dataMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    trendingApi();
  }, []);

  return (
    <>
      <h1>trending today</h1>
      {error && <h2>{error}</h2>}
      {isLoading ? <Loader /> : data && <TrendingList data={data} />}
    </>
  );
};

export default HomePage;
