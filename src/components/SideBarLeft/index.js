import React from 'react';
import { DFlex, SideNav } from './styles';

export default function SideBarLeft(props) {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <main>{props.children}</main>
      </SideNav>
    </DFlex>
  );
}
