import React from 'react';

import LabContent from '../../components/LabContent';
import CentralContent from './components/CentralContent';

export default function Home() {
  return (
    <>
      <LabContent />
      <CentralContent title="Faça o pedido" />
    </>
  );
}
