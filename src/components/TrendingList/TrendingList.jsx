import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TrendUl } from './TrendingList.Styled';

const TrendingList = ({ data }) => {
  const location = useLocation();

  return (
    <TrendUl>
      {data.map(result => (
        <li key={result.id}>
          <Link to={`/movies/${result.id}`} state={{ from: location }}>
            {result.title}
          </Link>
        </li>
      ))}
    </TrendUl>
  );
};

export default TrendingList;
