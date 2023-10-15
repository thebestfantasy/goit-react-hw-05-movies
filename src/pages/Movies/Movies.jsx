import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'service/API';
import { MoviesContainer, MoviesInput } from './Movies.Styled';

const Movies = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');

  const moviesByQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovie = async () => {
      setIsLoading(true);

      try {
        const findMovies = await getMoviesByName(moviesByQuery);
        setData(findMovies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovie();
  }, [moviesByQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.query.value;
    value ? setSearchParams({ query: value }) : setSearchParams({});
  };

  return (
    <MoviesContainer>
      <main>
        <h1>Movies</h1>
        <form onSubmit={handleSubmit}>
          <MoviesInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </main>
      {error && <h2>{error}</h2>}
      {isLoading ? <Loader /> : data && <TrendingList data={data} />}
    </MoviesContainer>
  );
};

export default Movies;
