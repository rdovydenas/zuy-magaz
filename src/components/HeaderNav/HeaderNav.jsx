import React from 'react';
import * as S from './HeaderNav.style';
import Menu from '../Menu/Menu';

const HeaderNav = () => {
  return (
    <S.HeaderNav>
      <Menu title="NAUJIENOS" link="/news" />
      <Menu title="APYRANKĖS" link="/bracelets" />
      <Menu title="KAROLIUKAI" link="/beads" />
      <Menu title="DOVANOS" link="/gifts" />
      <Menu title="NUOLAIDOS" link="/discounts" />
    </S.HeaderNav>
  );
};

export default HeaderNav;
