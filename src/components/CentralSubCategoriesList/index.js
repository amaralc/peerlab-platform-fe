import React from 'react';
import { Wrapper, Container, Title } from './styles';

export default function CentralSubCategoriesList(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
