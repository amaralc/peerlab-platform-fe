import React from 'react';
import { ListGroup, SideBarItem, SideBarHeading, SideBarGap } from './styles';

export default function SideCategoryList(props) {
  return (
    <>
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
    </>
  );
}
