import React from 'react';
import { DFlex, SideNav, SideBarHeading, SideBarGap } from './styles';
import LabList from '../LabList';
import LMP from '../../pages/SubCategories/img/lmp.png';

export default function LabContent(props) {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideBarHeading>{props.title}</SideBarHeading>
        <LabList
          imgPath={LMP}
          name="Laboratório de mecânica de precisão"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
          neque tempore recusandae animi soluta quasi?"
        />
        <LabList
          imgPath={LMP}
          name="Laboratório de Soldagem e Mec"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
          neque tempore recusandae animi soluta quasi?"
        />
      </SideNav>
    </DFlex>
  );
}
