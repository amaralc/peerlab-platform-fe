import React from 'react';
import NavItem from './NavItem';
import Find from './Find';
import { Container, Brand, Button } from './styles';

export default function NavbarFlex() {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <Brand to="/">peerLab</Brand>
        <Button
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <Find />
          <ul className="navbar-nav ml-auto">
            <NavItem item="Contato" route="/" />
            <NavItem item="Pedidos" route="/" />
            <NavItem item="Login" route="/" />
          </ul>
        </div>
      </nav>
    </Container>
  );
}
