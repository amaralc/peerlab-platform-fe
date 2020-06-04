import React from 'react';

import SideMenu from '../../components/SideMenu';
import CentralMenu from '../../components/CentralMenu';
import Microscope from './img/microscope.png';

export default function Home() {
  return (
    <>
      <SideMenu
        titlese="Escolha um Laboratório"
        lab1="Laboratório 1"
        lab2="Categoria 2"
        categoria3="Categoria 3"
      />
      <SideMenu
        titlefi="Escolha uma categoria"
        categoria1="Categoria 1"
        categoria2="Categoria 2"
        categoria3="Categoria 3"
      />
      <CentralMenu title="Ensaios" />
    </>
  );
}
