import React from 'react';
import { Container, Title, List, Gap } from './styles';

export default function ContentLeft(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <List className=" list-group-flush">
        <main>{props.children}</main>
      </List>
      <Gap />
    </Container>
  );
}
