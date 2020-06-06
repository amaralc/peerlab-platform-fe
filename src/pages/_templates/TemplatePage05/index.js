import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContent from './components/CentralContentLocal';

export default function Home() {
  return (
    <>
      <SideBarLeftLocal />
      <CentralContent title="Solicite o seu serviço" />
    </>
  );
}
