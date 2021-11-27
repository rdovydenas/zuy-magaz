import styled from 'styled-components';

export const MenuLi = styled.li`
  width: 20%;
  height: 80px;
  list-style: none;
  text-align: center;
`;

export const Text = styled.p`
  position: relative;
  top: 10px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 700px) {
    top: 23px;
    font-size: 11px;
  }
`;
