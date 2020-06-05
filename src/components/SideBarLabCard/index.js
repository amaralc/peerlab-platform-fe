import React from 'react';

import { Container, SideBarItem } from './styles';

function SideBarLabCard(props) {
  return (
    <>
      <Container to="/">
        <SideBarItem to="/">
          <h5>{props.name}</h5>
          <p>{props.text}</p>
          <img src={props.imgPath} alt="" />
        </SideBarItem>
      </Container>
    </>
  );
}

export default SideBarLabCard;
