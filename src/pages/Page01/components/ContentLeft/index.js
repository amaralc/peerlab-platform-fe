import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard02 from '../../../../components/SideBarCard02';

import LCME from '../../img/lcme.jpg';
import Cermat2 from '../../img/Cermat2.png';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Laboratórios">
        <SideBarCard02
          imgPath={Cermat2}
          title="CERMAT"
          subtitle="Núcleo de Pesquisas em Materiais Cerâmicos e Compósitos"
          text="Lorem ipsum massa curae quisque suspendisse mi ligula curae potenti. "
          route="/template-page-03"
        />
        <SideBarCard02
          imgPath={LCME}
          title="LCME"
          subtitle="Laboratório Central de Microscopia Eletrônica"
          text="Lorem ipsum massa curae quisque suspendisse mi ligula curae potenti. "
          route="/template-page-03"
        />
      </SideBarList>
    </Container>
  );
}
