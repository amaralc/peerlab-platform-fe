import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContent from './components/CentralContent';

export default function Home() {
  return (
    <>
      <SideBarLeftLocal />
      <CentralContent title="Faça o pedido" />
    </>
  );
}
