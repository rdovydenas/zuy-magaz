import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuLi = styled.li`
  width: 20%;
  height: 80px;
  list-style: none;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
  top: 28px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 700px) {
    top: 30px;
    font-size: 11px;
  }
`;
