import React from 'react';
import { ListGroup, SideBarHeading } from './styles';

export default function SideCategoryList(props) {
  return (
    <>
      <SideBarHeading>{props.title}</SideBarHeading>
      <ListGroup>{props.children}</ListGroup>
    </>
  );
}
