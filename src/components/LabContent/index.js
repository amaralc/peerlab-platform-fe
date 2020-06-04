import React from 'react';
import { DFlex, SideNav, SideBarHeading } from './styles';
import LabList from '../LabList';
import LMP from '../../pages/SubCategories/img/lmp.png';

export default function LabContent(props) {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideBarHeading>{props.title}</SideBarHeading>
        <LabList
          imgPath={LMP}
          name="LMP"
          text="Laboratório de mecânica de precisão"
        />
      </SideNav>
    </DFlex>
  );
}
