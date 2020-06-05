import React from 'react';
import SideBarLeft from '../../../../components/SideBarLeft';
import SideBarCategoryList from '../../../../components/SideBarCategoryList';
import SideBarLabCard from '../../../../components/SideBarLabCard';

import Lmp from '../../img/lmp.png';

// import { Container } from './styles';

function SideBarLeftLocal() {
  return (
    <SideBarLeft>
      <SideBarCategoryList title="Laboratórios">
        <SideBarLabCard
          title="LMP"
          text="Laboratório de Mecânica de Precisão"
          imagePath={Lmp}
        />
        <SideBarLabCard
          title="LABSOLDA"
          text="Laboratório de Soldagem"
          imagePath={Lmp}
        />
      </SideBarCategoryList>
    </SideBarLeft>
  );
}

export default SideBarLeftLocal;
