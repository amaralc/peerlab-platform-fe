import React from 'react';
import { Container } from './styles';

import SideBarList from '../../../../components/SideBarList';
import SideBarCard01 from '../../../../components/SideBarCard01';

import MicFluor from '../../img/MicFluor.jpg';

export default function ContentLeft() {
  return (
    <Container>
      <SideBarList title="Notícias">
        <SideBarCard01
          title="Microscópio de Fluorescência operando novamente!"
          subtitle="Informamos que o microscópio de fluorescência está operando novamente."
          imgPath={MicFluor}
          url="https://lcme.ufsc.br/2020/01/27/microscopio-de-fluorescencia-operando-novamente/"
        />
      </SideBarList>
    </Container>
  );
}
