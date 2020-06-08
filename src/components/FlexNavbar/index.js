import React from 'react';
import NavItem from './NavItem';
import Find from './Find';
import {
  Container,
  ActionContainer,
  Brand,
  MenuToggleButton,
  MenuContainer,
} from './styles';

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
        <ActionContainer>
          <Brand to="/template-page-01">peerLab</Brand>
          <MenuToggleButton onClick={this.toggleOpen} />
        </ActionContainer>
        <MenuContainer open={this.state.open}>
          <Find />
          <ul>
            <NavItem item="Contato" route="/template-page-01" />
            <NavItem item="Pedidos" route="/template-page-01" />
            <NavItem item="Login" route="/template-page-01" />
          </ul>
        </MenuContainer>
      </Container>
    );
  }
}
