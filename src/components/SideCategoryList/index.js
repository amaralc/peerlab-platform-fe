import React from 'react';
import { ListGroup, SideBarItem, SideBarHeading, SideBarGap } from './styles';

export default function SideCategoryList(props) {
  return (
    <>
      <SideBarHeading>{props.title}</SideBarHeading>
      <ListGroup className=" list-group-flush">
        <SideBarItem to="/">{props.category1}</SideBarItem>
        <SideBarItem to="/">{props.category2}</SideBarItem>
        <SideBarItem to="/">{props.category3}</SideBarItem>
        <SideBarItem to="/">{props.category4}</SideBarItem>
        <SideBarItem to="/">{props.category5}</SideBarItem>
        <SideBarItem to="/">{props.category6}</SideBarItem>
      </ListGroup>
      <SideBarGap />
    </>
  );
}
