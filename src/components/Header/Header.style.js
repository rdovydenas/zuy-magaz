import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  background: #ed4264; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffedbc,
    #ed4264
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffedbc,
    #ed4264
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  z-index: 99;
  height: 80px;
  width: 100vw;
  margin: 0 auto;
  color: black;
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;
