import React from 'react';
import { Container, Title } from './styles';

export default function ContentCenter(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <main>{props.children}</main>
    </Container>
  );
}
