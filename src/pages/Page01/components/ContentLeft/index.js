import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard02 from '../../../../components/SideBarCard02';

import LCME from '../../img/lcme.jpg';
import Cermat from '../../img/Cermat.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Template Title 01">
        <SideBarCard02
          title="CERMAT"
          subtitle="Núcleo de Pesquisas em Materiais Cerâmicos e Compósitos"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={Cermat}
          route="/template-page-03"
        />
        <SideBarCard02
          title="LCME"
          subtitle="Laboratório Central de Microscopia Eletrônica"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={LCME}
          route="/template-page-03"
        />
      </SideBarList>
    </Container>
  );
}
