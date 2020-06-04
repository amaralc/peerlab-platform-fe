import React from 'react';
import { ListGroup, SideBarItem, SideBarGap } from './styles';

export default function LabList(props) {
  return (
    <>
      <ListGroup className=" list-group-flush">
        <SideBarItem to="/">
          <img src={props.imgPath} alt="" />
          <h5>{props.name}</h5>
          <p>{props.text}</p>
        </SideBarItem>
      </ListGroup>
      <SideBarGap />
    </>
  );
}
