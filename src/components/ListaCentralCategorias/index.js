import React from 'react';
import { Row, Title } from './styles';
import IconCard from '../IconCard';

export default function ListaCentralCategorias(props) {
  return (
    <Row>
      <Title>{props.title}</Title>
      <IconCard
        cardText={props.name}
        cardImgSrc={props.imgPath}
        cardRoute="/"
      />
      <IconCard cardText="test" cardImgSrc={props.imgPath} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={props.imgPath} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={props.imgPath} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={props.imgPath} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={props.imgPath} cardRoute="/" />
    </Row>
  );
}
