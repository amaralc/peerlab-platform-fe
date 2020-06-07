import React from 'react';

import { Container, SideBarItem } from './styles';

export default function SideBarCard02(props) {
  return (
    <>
      <Container to={props.route}>
        <SideBarItem>
          <img src={props.imgPath} alt="" />
          <h5>
            {props.title}
            <p>{props.subtitle}</p>
          </h5>
          <p>{props.text}</p>
        </SideBarItem>
      </Container>
    </>
  );
}
