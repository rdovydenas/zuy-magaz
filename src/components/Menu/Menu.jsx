import React from 'react';

import * as S from './Menu.style';

const Menu = ({ title, link }) => {
  return (
    <S.MenuLi>
      <S.StyledLink to={link}>{title}</S.StyledLink>
    </S.MenuLi>
  );
};

export default Menu;
