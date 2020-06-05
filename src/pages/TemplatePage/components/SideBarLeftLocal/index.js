import React from 'react';
import SideBarLeft from '../../../../components/SideBarLeft';
import SideBarCategoryList from '../../../../components/SideBarCategoryList';
import SideBarItem from '../../../../components/SideBarItem';

// import { Container } from './styles';

function SideBarLeftLocal() {
  return (
    <SideBarLeft>
      <SideBarCategoryList title="Categorias">
        <SideBarItem itemName="Categoria 01" />
        <SideBarItem itemName="Categoria 02" />
        <SideBarItem itemName="Categoria 03" />
      </SideBarCategoryList>
      <SideBarCategoryList title="Laboratórios">
        <SideBarItem itemName="Laboratório 01" />
        <SideBarItem itemName="Laboratório 02" />
        <SideBarItem itemName="Laboratório 03" />
      </SideBarCategoryList>
    </SideBarLeft>
  );
}

export default SideBarLeftLocal;
