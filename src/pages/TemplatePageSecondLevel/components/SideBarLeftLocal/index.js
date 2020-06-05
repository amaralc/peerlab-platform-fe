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
          name="LMP"
          text="Laboratório de Mecânica de Precisão"
          imgPath={Lmp}
        />
        <SideBarLabCard
          name="LABSOLDA"
          text="Laboratório de Soldagem"
          imgPath={Lmp}
        />
      </SideBarCategoryList>
    </SideBarLeft>
  );
}

export default SideBarLeftLocal;
