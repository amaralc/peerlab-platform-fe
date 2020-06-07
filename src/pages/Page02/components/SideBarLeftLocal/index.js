import React from 'react';
import SideBarLeft from '../../../../components/SideBarLeft';
import SideBarCategoryList from '../../../../components/SideBarCategoryList';
import SideBarCard02 from '../../../../components/SideBarCard02';

import Lmp from '../../img/lmp.png';

// import { Container } from './styles';

function SideBarLeftLocal() {
  return (
    <SideBarLeft>
      <SideBarCategoryList title="Laboratórios">
        <SideBarCard02
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={Lmp}
        />
        <SideBarCard02
          title="LABSOLDA"
          subtitle="Instituto de Soldagem e Mecatrônica"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          imgPath={Lmp}
        />
      </SideBarCategoryList>
    </SideBarLeft>
  );
}

export default SideBarLeftLocal;
