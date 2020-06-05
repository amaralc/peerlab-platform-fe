import React from 'react';
import { Container, Title } from './styles';

export default function CentralCategoriesList(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  );
}
