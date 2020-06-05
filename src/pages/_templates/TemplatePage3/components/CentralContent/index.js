import React from 'react';
import { CentralHeading, Div } from './styles';

function CentralContent(props) {
  return (
    <Div className="container-fluid">
      <CentralHeading>{props.title}</CentralHeading>
      <main>{props.children}</main>
    </Div>
  );
}

export default CentralContent;
