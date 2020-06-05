import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContentLocal from './components/CentralContentLocal';
import Right from './components/Right';

export default function TemplatePage3() {
  return (
    <>
      <SideBarLeftLocal />
      <CentralContentLocal title="Faça o pedido" />
      <Right />
    </>
  );
}
