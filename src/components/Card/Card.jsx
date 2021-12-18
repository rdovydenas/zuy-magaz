import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardModal from '../CardModal/CardModal';
import * as S from './Card.style';

const Card = ({ image, title, price, description }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <S.Card onClick={() => setOpenModal(true)}>
        <S.Image src={image} />
        <S.CardInfo>
          <S.Title>{title}</S.Title>
          <S.Price>{price} €</S.Price>
        </S.CardInfo>
      </S.Card>
      {openModal ? (
        <CardModal
          description={description}
          setOpenModal={setOpenModal}
          image={image}
          title={title}
          price={price}
        />
      ) : (
        ''
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default Card;
