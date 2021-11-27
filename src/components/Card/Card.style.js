import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  max-width: 70%;
  max-height: 70%;
  transition: 0.2s ease-in-out;
  @media (max-width: 991px) {
    height: 70%;
    max-width: 1500px;
    max-height: 1500px;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Card = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: calc(25% - 20px);
  max-height: 400px;
  border-radius: 5px;
  min-height: 300px;
  margin: 10px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  &:hover ${Image} {
    max-height: 75%;
    max-width: 75%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;
