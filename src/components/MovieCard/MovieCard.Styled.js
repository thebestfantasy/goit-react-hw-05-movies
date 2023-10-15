import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  margin-top: 10px;
  border-bottom: 1px solid black;
  font-size: 20px;
`;

export const MoviePoster = styled.img`
  width: 350px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  padding: 16px;
`;
