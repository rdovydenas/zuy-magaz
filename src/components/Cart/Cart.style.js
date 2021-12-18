import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 100px;
  right: 100px;
  img {
    height: 60px;
    cursor: pointer;
    @media (max-width: 991px) {
    }
  }
  @media (max-width: 991px) {
    bottom: 40px;
    right: 40px;
  }
`;
