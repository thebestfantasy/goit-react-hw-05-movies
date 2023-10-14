import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TrendingList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.results.map(result => (
        <li key={result.id}>
          <Link to={`/movies/${result.id}`} state={{ from: location }}>
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
