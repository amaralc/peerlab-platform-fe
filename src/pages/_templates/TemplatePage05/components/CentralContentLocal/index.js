import React from 'react';
import CentralContent from '../../../../../components/CentralContent';

import CentralServiceList from '../../../../../components/CentralServiceList';

import Ensaio from '../../img/Ensaio.jpg';

function CentralContentLocal() {
  return (
    <CentralContent title="Solicite o seu serviço">
      <CentralServiceList
        imgPath={Ensaio}
        title="Ensaio de tração"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
        contact="(48)999999999"
        url="/"
        button="Solicite"
      />
      <CentralServiceList
        imgPath={Ensaio}
        title="Ensaio de tração"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
        contact="(48)999999999"
        url="/"
        button="Solicite"
      />
    </CentralContent>
  );
}

export default CentralContentLocal;
