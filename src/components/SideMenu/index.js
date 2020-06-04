import React from 'react';
import { DFlex, SideNav } from './styles';
import SideCategoryList from '../SideCategoryList';

export default function SideMenu() {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideCategoryList />
        <SideCategoryList />
      </SideNav>
    </DFlex>
  );
}
