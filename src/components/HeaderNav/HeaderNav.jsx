import React from 'react';
import * as S from './HeaderNav.style';
import Menu from '../Menu/Menu';

const HeaderNav = () => {
  return (
    <S.HeaderNav>
      <Menu title="NAUJIENOS" />
      <Menu title="APYRANKĖS" />
      <Menu title="KAROLIUKAI" />
      <Menu title="DOVANOS" />
      <Menu title="NUOLAIDOS" />
    </S.HeaderNav>
  );
};

export default HeaderNav;
