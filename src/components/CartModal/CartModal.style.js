import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 102;
  background-color: rgba(255, 0, 0, 0.2);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 10px;
  margin: 40px;
  width: calc(100vw - 80px);
  height: calc(100vh - 80px);
  @media (max-width: 991px) {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  @media (max-width: 700px) {
    height: 86vh;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  cursor: pointer;
  z-index: 101;
  max-width: 50px;
  right: 50px;
  top: 50px;
  @media (max-width: 991px) {
    position: fixed;
  }
`;

export const H1 = styled.h1`
  padding-top: 60px;
  text-align: center;
  font-size: 40px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    padding-top: 20px;
    font-size: 30px;
  }
`;
