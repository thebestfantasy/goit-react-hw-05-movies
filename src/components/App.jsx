import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound';
import Layout from 'Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

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
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
