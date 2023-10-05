import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="homepage">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
    </div>
  );
};

export default Header;
