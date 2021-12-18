import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Pagination.style';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <S.Container>
      <S.Navigation>
        <S.Ul>
          {pageNumbers.map((number) => (
            <S.Li key={number}>
              <S.Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  paginate(number);
                }}
              >
                {currentPage === number ? <b>{number}</b> : number}
              </S.Link>
            </S.Li>
          ))}
        </S.Ul>
      </S.Navigation>
    </S.Container>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
