import React from 'react';

import SideContent from '../../components/SideContent';
import CentralContent from './components/CentralContent';

export default function Home() {
  return (
    <>
      <SideContent />
      <CentralContent title="Faça o pedido" />
    </>
  );
}
