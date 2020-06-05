import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContentLocal from './components/CentralContentLocal';

export default function Home() {
  return (
    <>
      <SideBarLeftLocal />
      <CentralContentLocal title="Faça o pedido" />
    </>
  );
}
