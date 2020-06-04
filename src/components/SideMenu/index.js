import React from 'react';
import {
  DFlex,
  SideNav,
  ListGroup,
  SideBarItem,
  SideBarHeading,
  SideBarGap,
} from './styles';

export default function SideMenu() {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideBarHeading>Escolha uma categoria</SideBarHeading>
        <ListGroup className=" list-group-flush">
          <SideBarItem to="/">Categoria 01</SideBarItem>
          <SideBarItem to="/">Categoria 02</SideBarItem>
          <SideBarItem to="/">Categoria 03</SideBarItem>
          <SideBarItem to="/">Categoria 04</SideBarItem>
          <SideBarItem to="/">Categoria 05</SideBarItem>
          <SideBarItem to="/">Categoria 06</SideBarItem>
        </ListGroup>
        <SideBarGap />
        <SideBarHeading>Escolha um laboratório</SideBarHeading>
        <ListGroup className=" list-group-flush">
          <SideBarItem to="/">Lab 01</SideBarItem>
          <SideBarItem to="/">Lab 02</SideBarItem>
          <SideBarItem to="/">Lab 03</SideBarItem>
          <SideBarItem to="/">Lab 04</SideBarItem>
          <SideBarItem to="/">Lab 05</SideBarItem>
          <SideBarItem to="/">Lab 06</SideBarItem>
        </ListGroup>
      </SideNav>
    </DFlex>
  );
}
