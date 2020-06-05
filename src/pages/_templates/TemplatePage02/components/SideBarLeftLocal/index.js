import React from 'react';
import SideBarLeft from '../../../../../components/SideBarLeft';
import SideBarCategoryList from '../../../../../components/SideBarCategoryList';
import SideBarLabCard from '../../../../../components/SideBarLabCard';
import SideBarLabCard2 from '../../../../../components/SideBarLabCard2';

import Lmp from '../../img/lmp.png';

// import { Container } from './styles';

function SideBarLeftLocal() {
  return (
    <SideBarLeft>
      <SideBarCategoryList title="Laboratórios">
        <SideBarLabCard
          title="LMP"
          subtitle="Laboratório de Mecânica de Precisão"
          imgPath={Lmp}
        />
        <SideBarLabCard2
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
