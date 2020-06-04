import React from 'react';
import {
  DFlex,
  SideNav,
  ListGroup,
  SideBarItem,
  SideBarHeading,
  SideBarGap,
} from './styles';

export default function SideMenu(props) {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideBarHeading>{props.title}</SideBarHeading>
        <ListGroup className=" list-group-flush">
          <SideBarItem to="/">{props.categoria1}</SideBarItem>
          <SideBarItem to="/">{props.categoria2}</SideBarItem>
          <SideBarItem to="/">{props.categoria3}</SideBarItem>
          <SideBarItem to="/">{props.categoria4}</SideBarItem>
          <SideBarItem to="/">{props.categoria5}</SideBarItem>
          <SideBarItem to="/">{props.categoria6}</SideBarItem>
        </ListGroup>

        <SideBarGap />

        <SideBarHeading>{props.titlese}</SideBarHeading>
        <ListGroup className=" list-group-flush">
          <SideBarItem to="/">{props.lab1}</SideBarItem>
          <SideBarItem to="/">{props.lab2}</SideBarItem>
          <SideBarItem to="/">{props.lab3}</SideBarItem>
          <SideBarItem to="/">{props.lab4}</SideBarItem>
          <SideBarItem to="/">{props.lab5}</SideBarItem>
          <SideBarItem to="/">{props.lab6}</SideBarItem>
        </ListGroup>
      </SideNav>
    </DFlex>
  );
}
