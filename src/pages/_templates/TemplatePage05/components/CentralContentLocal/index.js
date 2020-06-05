import React from 'react';
import CentralContent from '../../../../../components/CentralContent';

import CentralServiceList from '../../../../../components/CentralServiceList';

import LMP from '../../img/lmp.png';

function CentralContentLocal() {
  return (
    <CentralContent title="Solicite o seu serviço">
      <CentralServiceList
        imgPath={LMP}
        title="Ensaio de tração"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
        contact="(48)998560006"
      />
      <CentralServiceList
        imgPath={LMP}
        title="Ensaio de tração"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
        contact="(48)998560006"
      />
    </CentralContent>
  );
}

export default CentralContentLocal;
