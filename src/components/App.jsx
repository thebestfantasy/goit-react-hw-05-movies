import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
import Layout from 'Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="homepage" index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="moviedetails" element={<MovieDetails />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
