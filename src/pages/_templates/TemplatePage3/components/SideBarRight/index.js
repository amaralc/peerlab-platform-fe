import React from 'react';
import { Div, SideNav } from './styles';

function Right(props) {
  return (
    <Div>
      <SideNav>
        <main>{props.children}</main>
      </SideNav>
    </Div>
  );
}

export default Right;
