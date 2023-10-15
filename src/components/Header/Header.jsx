import { Container, HeaderStyled, Link } from './Header.Styled';

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <nav>
          <Link to="homepage">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
