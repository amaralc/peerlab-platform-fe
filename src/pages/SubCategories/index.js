import React from 'react';

import CentralContent from './components/CentralContent';

import LabContent from '../../components/LabContent';

export default function Home() {
  return (
    <>
      <LabContent title="Laboratórios" />
      <CentralContent title="Sub categorias" />
    </>
  );
}
