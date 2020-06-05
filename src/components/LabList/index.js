import React from 'react';
import { ListGroup, SideBarItem } from './styles';

export default function LabList(props) {
  return (
    <>
      <ListGroup className=" list-group-flush">
        <SideBarItem to="/">
          <h5>{props.name}</h5>
          <p>{props.text}</p>
          <img src={props.imgPath} alt="" />
        </SideBarItem>
      </ListGroup>
    </>
  );
}
