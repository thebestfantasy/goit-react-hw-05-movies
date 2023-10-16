import { HeaderStyled, Link } from './Header.Styled';

const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </HeaderStyled>
    </div>
  );
};

export default Header;
