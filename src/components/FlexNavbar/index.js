import React from 'react';
import NavItem from './NavItem';
import Find from './Find';
import { Container, Brand, Button, Menu } from './styles';

export default function NavbarFlex() {
  return (
    <Container>
      <Brand to="/">peerLab</Brand>
      <Button />
      <Menu>
        <Find />
      </Menu>
    </Container>
  );
}
