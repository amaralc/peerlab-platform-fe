import React from 'react';
import { Container, Title, List } from './styles';

export default function ContentLeft(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <List>{props.children}</List>
    </Container>
  );
}
