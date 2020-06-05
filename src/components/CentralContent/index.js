import React from 'react';
import { Container, CentralHeading } from './styles';

function CentralContent(props) {
  return (
    <>
      <Container>
        <CentralHeading>{props.title}</CentralHeading>
        <main>{props.children}</main>
      </Container>
    </>
  );
}

export default CentralContent;
