import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Home.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Heading from '../../components/Heading/Heading';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';
import Cart from '../../components/Cart/Cart';

const Home = ({ data, postsPerPage, totalPosts, currentPage, paginate }) => {
  return (
    <S.Background>
      <Header />
      <S.Container>
        <Heading title="Visos Prekės" />
        <Cards data={data} />
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
        />
        <Cart />
      </S.Container>
      <Footer />
    </S.Background>
  );
};

Home.propTypes = {
  data: PropTypes.array,
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

export default Home;
