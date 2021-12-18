import React from 'react';
import * as S from './News.style';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const News = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Banner>
          <h1>
            Atrask <span>prabangą</span> paprastume.
          </h1>
          <button>
            <S.StyledLink to="../">
              Peržiūrėti visą <span>inventorių.</span>
            </S.StyledLink>
          </button>
        </S.Banner>
      </S.Container>
      <Footer />
    </>
  );
};

export default News;
