import React from 'react';
import * as S from './Menu.style';

const Menu = ({ title }) => {
  return (
    <S.MenuLi>
      <S.Text>{title}</S.Text>
    </S.MenuLi>
  );
};

export default Menu;
