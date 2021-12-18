import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
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

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 991px) {
    display: block;
    width: 100%;
  }
`;

export const Description = styled.p`
  text-align: justify;
  margin-right: 40px;
  @media (max-width: 991px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    width: 82%;
  }
`;

export const H1 = styled.h1`
  padding-top: 60px;
  font-size: 40px;
  @media (max-width: 991px) {
    text-align: center;
    padding-bottom: 40px;
    font-size: 40px;
  }
  @media (max-width: 700px) {
    padding-top: 20px;
    font-size: 30px;
  }
`;

export const Image = styled.img`
  margin: 40px;
  /* width: calc(100% - 80px); */
  width: 42vw;
  max-height: 500px;
  max-width: 500px;
  @media (max-width: 991px) {
    position: relative;
    width: calc(90% - 40px);
    max-height: 1500px;
    max-width: 1500px;
  }
`;

export const Price = styled.p`
  font-size: 30px;
  text-align: right;
  margin-right: 40px;
  margin-top: 10%;
  @media (max-width: 991px) {
    text-align: right;
    margin-right: 40px;
  }
  @media (max-width: 700px) {
    margin-right: 25px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 45%;
  outline: none;
  padding: 10px;
  color: black;
  border: 0;
  margin-top: 70px;
  bottom: 100px;
  border-radius: 5px;
  background-color: lavenderblush;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: lavender;
  }
  @media (max-width: 991px) {
    position: relative;
    bottom: 20px;
    left: 20px;
  }
  @media (max-width: 700px) {
    width: 44%;
    left: 10px;
    font-size: 12px;
  }
`;

export const CheckOut = styled.button`
  position: absolute;
  color: black;
  width: 45%;
  outline: none;
  padding: 10px;
  border: 0;
  right: 40px;
  margin-top: 70px;
  bottom: 100px;
  border-radius: 5px;
  background-color: lavender;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
  @media (max-width: 991px) {
    position: relative;
    bottom: 20px;
    right: -40px;
  }
  @media (max-width: 700px) {
    width: 44%;
    font-size: 12px;
    right: -30px;
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

export const ShippingInfo = styled.p`
  position: absolute;
  bottom: 20px;
  right: 40px;
  text-align: right;
  font-size: 12px;
  margin-top: 40px;
  @media (max-width: 991px) {
    position: relative;
    bottom: 20px;
    right: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 700px) {
    padding-bottom: 0px;
  }
`;

export const RightSide = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
