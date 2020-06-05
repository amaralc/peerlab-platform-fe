import React from 'react';
import { Row, Title } from './styles';

export default function CentralCategoriesList(props) {
  return (
    <Row>
      <Title>{props.title}</Title>
      {props.children}
    </Row>
  );
}
