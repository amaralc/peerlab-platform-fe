import React from 'react';
import { DFlex, SideNav } from './styles';

export default function SideBarRight(props) {
  return (
    <DFlex>
      <SideNav>
        <main>{props.children}</main>
      </SideNav>
    </DFlex>
  );
}
