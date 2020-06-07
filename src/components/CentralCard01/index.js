import React from 'react';

import { Container, CardImg, CardBody, CardText } from './styles';

export default function CentralCard01(props) {
  return (
    <Container to={props.cardRoute}>
      <CardImg src={props.cardImgSrc} alt={props.cardImgAlt} />
      <CardBody>
        <CardText>{props.cardText}</CardText>
      </CardBody>
    </Container>
  );
}
