import React from 'react';

import { Container, SideBarItem } from './styles';

function SideBarLabCard(props) {
  return (
    <>
      <Container to="/">
        <SideBarItem to="/">
          <img src={props.imgPath} alt="" />
          <h5>
            {props.name}
            <p>{props.subname}</p>
          </h5>
          <p>{props.text}</p>
        </SideBarItem>
      </Container>
    </>
  );
}

export default SideBarLabCard;
