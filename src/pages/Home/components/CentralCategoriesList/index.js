import React from 'react';
import { Row, Title } from './styles';
import IconCard from '../../../../components/IconCard';

import Microscope from '../../img/microscope.png';

export default function CentralCategoriesList(props) {
  return (
    <Row>
      <Title>{props.title}</Title>

      <IconCard
        cardText="Ícone"
        cardImgSrc={Microscope}
        cardRoute="/sub-categories"
      />
      <IconCard
        cardText="Ícone"
        cardImgSrc={Microscope}
        cardRoute="/sub-categories"
      />
      <IconCard
        cardText="Ícone"
        cardImgSrc={Microscope}
        cardRoute="/sub-categories"
      />
      <IconCard
        cardText="Ícone"
        cardImgSrc={Microscope}
        cardRoute="/sub-categories"
      />
      <IconCard
        cardText="Ícone"
        cardImgSrc={Microscope}
        cardRoute="/sub-categories"
      />
    </Row>
  );
}
