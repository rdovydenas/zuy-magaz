import React, { useState } from 'react';
import * as S from './Cart.style';

import cartImage from '../../img/cart.svg';
import CartModal from '../CartModal/CartModal';

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.Container>
      <img onClick={() => setOpenModal(true)} src={cartImage} alt="cart" />
      {openModal ? <CartModal setOpenModal={setOpenModal} /> : ''}
    </S.Container>
  );
};

export default Cart;
