import React from 'react';

import { Card, CardImg, CardBody, CardText } from './styles';

function IconCard(props) {
  return (
    <>
      <Card to={props.cardRoute}>
        <CardImg src={props.cardImgSrc} alt={props.cardImgAlt} />
        <CardBody>
          <CardText>{props.cardText}</CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default IconCard;
