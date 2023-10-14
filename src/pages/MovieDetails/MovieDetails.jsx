import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieInfo } from 'service/API';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    const movieDetails = async () => {
      setIsLoading(true);

      try {
        const movieDetailsData = await getMovieInfo(movieId);

        setData(movieDetailsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader />}
      {data && <MovieCard movieData={data} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
