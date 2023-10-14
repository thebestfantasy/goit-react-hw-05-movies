import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const MoviePoster = styled.img`
  width: 300px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 12px;
`;
