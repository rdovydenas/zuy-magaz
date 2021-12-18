import React from 'react';
import PropTypes from 'prop-types';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import * as S from './CardModal.style';

import CloseBtnImg from '../../img/close.svg';

const CardModal = ({ image, title, price, description, setOpenModal }) => {
  const createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Sėkmingai prideta į krėpšelį.', 'Pavyko!');
        break;
      case 'warning':
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000
        );
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
      // do nothing
    }
  };
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
            <S.Button onClick={() => createNotification('success')}>
              Pridėti į krepšelį
            </S.Button>
            <S.CheckOut>Atsiskaitom!</S.CheckOut>
          </div>
          <S.ShippingInfo>
            *Į prekės kainą neįskaičuotas siuntimas.
          </S.ShippingInfo>
        </S.RightSide>
        <NotificationContainer />
      </S.Container>
    </S.Overlay>
  );
};

CardModal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  setOpenModal: PropTypes.func,
};

export default CardModal;
