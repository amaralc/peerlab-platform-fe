import React from 'react';
import { DFlex, SideNav } from './styles';

export default function SideBarLeft(props) {
  return (
    <DFlex>
      <SideNav>
        <main>{props.children}</main>
      </SideNav>
    </DFlex>
  );
}
