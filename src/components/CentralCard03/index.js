import React from 'react';
import { Container, Body } from './styles';

export default function CentralCard02(props) {
  return (
    <Container>
      <img src={props.imgPath} alt="" />
      <Body>
        <div>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>

        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.button} &raquo;
        </a>
      </Body>
    </Container>
  );
}
