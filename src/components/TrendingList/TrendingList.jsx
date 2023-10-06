import React from 'react';
// import { Link, NavLink } from 'react-router-dom'

const TrendingList = ({ data }) => {
  return (
    <ul>
      {data.results.map(result => (
        <li key={result.id}>
          {/* <NavLink to={}></NavLink>  */}
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
