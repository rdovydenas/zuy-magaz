import React from 'react';
import * as S from './CartModal.style';

import CloseBtnImg from '../../img/close.svg';

const CartModal = ({ setOpenModal }) => {
  return (
    <S.Container>
      <S.Overlay>
        <S.Container>
          <S.CloseButton
            src={CloseBtnImg}
            onClick={() => setOpenModal(false)}
          />
          <S.H1>Krepšelis</S.H1>
        </S.Container>
      </S.Overlay>
    </S.Container>
  );
};

export default CartModal;
