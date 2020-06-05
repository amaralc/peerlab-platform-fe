import React from 'react';
import { Container, SideNav } from './styles';

export default function SideBarLeft(props) {
  return (
    <Container>
      <SideNav id="sidebar-wrapper">
        <main>{props.children}</main>
      </SideNav>
    </Container>
  );
}
