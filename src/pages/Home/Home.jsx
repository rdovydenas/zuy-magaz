import React from 'react';
import * as S from './Home.style';

import H1 from '../../components/Heading/Heading';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';

const Home = ({ data, postsPerPage, totalPosts, currentPage, paginate }) => {
  return (
    <S.Container>
      <H1 title="Visos Prekės" />
      <Cards data={data} />
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
      />
    </S.Container>
  );
};

export default Home;
