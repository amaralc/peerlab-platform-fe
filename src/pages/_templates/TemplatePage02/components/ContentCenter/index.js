import React from 'react';
import { Container, Title } from './styles';

import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CentralSubCategoriesList from '../../../../../components/CentralSubCategoriesList';
import IconCard from '../../../../../components/IconCard';
import Microscope from '../../img/microscope.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <CentralCategoriesList title="Grupo 01">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
          <IconCard
            cardText="Item"
            cardImgSrc={Microscope}
            cardRoute="/template-page-03"
          />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
    </Container>
  );
}
