import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  /* top: 100px; */
  border-radius: 10px;
`;

export const Banner = styled.div`
  background-image: url('https://i0.wp.com/www.oakleyjewelers.com/images/banner-img-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 800px;
  width: 100vw;
  h1 {
    margin: 0 auto;
    font-size: 56px;
    width: 90vw;
    padding-top: 250px;
    color: white;
    span {
      color: #ff8008;
    }
  }
  button {
    padding: 20px;
    margin-top: 100px;
    margin-left: 5vw;
    outline: none;
    border-radius: 10px;
    font-size: 24px;
    background: white;
    cursor: pointer;
    span {
      color: #ff8008;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
