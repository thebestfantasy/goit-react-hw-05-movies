import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('../components/Layout/Layout'));
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
// const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homepage" index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="notfound" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
