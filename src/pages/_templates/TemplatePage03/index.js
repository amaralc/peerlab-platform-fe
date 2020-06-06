import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContentLocal from './components/CentralContentLocal';
import SideBarRight from './components/SideBarRight';
import { Container } from './styles';
import SideBarCategoryList from '../../../components/SideBarCategoryList';
import SideBarItem from '../../../components/SideBarItem';

export default function TemplatePage03() {
  return (
    <Container>
      <SideBarLeftLocal />
      <CentralContentLocal title="Faça o pedido" />
      <SideBarRight>
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
      </SideBarRight>
    </Container>
  );
}
