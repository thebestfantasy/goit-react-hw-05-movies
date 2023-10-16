import { useLocation } from 'react-router-dom';
import { Card, GenresList, MoviePoster, StyledLink } from './MovieCard.Styled';
import { useRef } from 'react';

const MovieCard = ({ movieData }) => {
  const location = useLocation();

  const { overview, genres, poster_path, title, release_date, vote_average } =
    movieData;
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const year = parseInt(release_date.split('-'));
  const backLinkHref = useRef(location.state?.from ?? '/');
  const defaultImg = '/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg';

  return (
    <>
      <StyledLink to={backLinkHref.current}>Go Back</StyledLink>
      <Card>
        <div>
          {poster_path ? (
            <MoviePoster src={`${imgPath}${poster_path}`} alt={title} />
          ) : (
            <MoviePoster src={`${imgPath}${defaultImg}`} alt={'no image'} />
          )}
        </div>
        <div>
          <h2>{`${title} (${year})`}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </Card>
    </>
  );
};

export default MovieCard;
