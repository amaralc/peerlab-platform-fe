import React from 'react';
import { Row, Container, Body } from './styles';

export default function CentralServiceList(props) {
  return (
    <Row>
      <Container>
        <img src={props.imgPath} alt="" />
        <Body>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
          <p>{props.contact}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.button}
          </a>
        </Body>
      </Container>
    </Row>
  );
}
