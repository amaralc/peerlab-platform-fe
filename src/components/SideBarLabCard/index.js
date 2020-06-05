import React from 'react';

import { Container, Image, InfoContainer, InfoTitle, InfoText } from './styles';

function SideBarLabCard(props) {
  return (
    <>
      <Container to="/">
        <Image src={props.imgPath} alt="" />
        <InfoContainer>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoText>{props.subtitle}</InfoText>
        </InfoContainer>
      </Container>
    </>
  );
}

export default SideBarLabCard;
