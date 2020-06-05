import React from 'react';
import { DFlex, SideNav } from './styles';
import SideCategoryList from '../SideCategoryList';

export default function SideContent() {
  return (
    <DFlex id="wrapper">
      <SideNav id="sidebar-wrapper">
        <SideCategoryList
          title="Escolha uma categoria"
          category1="Categoria 01"
          category2="Categoria 02"
          category3="Categoria 03"
          category4="Categoria 04"
          category5="Categoria 05"
          category6="Categoria 06"
        />
        <SideCategoryList
          title="Escolha um laboratório"
          category1="Laboratório 01"
          category2="Laboratório 02"
          category3="Laboratório 03"
          category4="Laboratório 04"
          category5="Laboratório 05"
          category6="Laboratório 06"
        />
      </SideNav>
    </DFlex>
  );
}
