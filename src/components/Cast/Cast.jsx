import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/API';
import CastList from './CastList';

const Cast = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const castByMovieId = async () => {
      try {
        const castData = await getCast(movieId);
        setData(castData);
      } catch (error) {
        setError(error.message);
      }
    };
    castByMovieId();
  }, [movieId]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {data && <CastList actors={data} />}
    </>
  );
};

export default Cast;
