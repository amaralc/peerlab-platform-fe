import React from 'react';
import { ListGroup, SideBarHeading, SideBarGap } from './styles';

export default function SideCategoryList(props) {
  return (
    <>
      <SideBarHeading>{props.title}</SideBarHeading>
      <ListGroup>{props.children}</ListGroup>
    </>
  );
}
