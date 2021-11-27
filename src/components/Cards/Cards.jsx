import React from 'react';
import * as S from './Cards.style';
import Card from '../Card/Card';

const Cards = ({ data }) => {
  return (
    <S.CardsContainer>
      {data &&
        data.map((object) => (
          <Card
            key={object.id}
            image={object.image}
            title={object.title}
            price={object.price}
            description={object.description}
          />
        ))}
    </S.CardsContainer>
  );
};

export default Cards;
