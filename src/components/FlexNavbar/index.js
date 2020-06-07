import React from 'react';
import NavItem from './NavItem';
import Find from './Find';
import { Container, LeftContainer, Brand, Button, Menu } from './styles';

export default class FlexNavbar extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container>
        <LeftContainer>
          <Brand to="/">peerLab</Brand>
          <Button onClick={this.toggleOpen} />
        </LeftContainer>
        <Menu open={this.state.open}>
          <Find />
          <ul>
            <NavItem item="Login" />
            <NavItem item="Login" />
            <NavItem item="Login" />
          </ul>
        </Menu>
      </Container>
    );
  }
}
