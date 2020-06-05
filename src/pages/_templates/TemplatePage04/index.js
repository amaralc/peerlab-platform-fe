import React from 'react';

import SideBarLeftLocal from './components/SideBarLeftLocal';
import CentralContent from './components/CentralContentLocal';
import PageContentWrapper from '../../../components/PageContentWrapper';

export default function Home() {
  return (
    <PageContentWrapper>
      <SideBarLeftLocal />
      <CentralContent title="Faça o pedido" />
    </PageContentWrapper>
  );
}
