import React from 'react';
import * as S from './CardModal.style';

import CloseBtnImg from '../../img/close.svg';

const CardModal = ({ image, title, price, description, setOpenModal }) => {
  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton src={CloseBtnImg} onClick={() => setOpenModal(false)} />
        <S.LeftSide>
          <S.Image src={image} />
        </S.LeftSide>
        <S.RightSide>
          <S.H1>{title}</S.H1>
          <S.Description>{description}</S.Description>
          <S.Price>{price} $*</S.Price>
          <div>
            <S.Button>Pridėti į krepšelį</S.Button>
            <S.CheckOut>Atsiskaitom!</S.CheckOut>
          </div>
          <S.ShippingInfo>
            *Į prekės kainą neįskaičuotas siuntimas.
          </S.ShippingInfo>
        </S.RightSide>
      </S.Container>
    </S.Overlay>
  );
};

export default CardModal;
