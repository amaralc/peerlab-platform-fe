import React from 'react';

import { Container, Image, InfoContainer, InfoTitle, InfoText } from './styles';

function SideBarLabCard(props) {
  return (
    <>
      <Container to="/">
        <Image src={props.imagePath} alt="" />
        <InfoContainer>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoText>{props.text}</InfoText>
        </InfoContainer>
      </Container>
    </>
  );
}

export default SideBarLabCard;
