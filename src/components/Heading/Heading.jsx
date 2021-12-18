import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heading.style';

const Heading = ({ title }) => {
  return <S.H1>{title}</S.H1>;
};

Heading.propTypes = {
  title: PropTypes.string,
};

export default Heading;
