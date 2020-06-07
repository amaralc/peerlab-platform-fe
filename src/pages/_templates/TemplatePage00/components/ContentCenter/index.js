import React from 'react';
import { Container, Title } from './styles';

import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CentralSubCategoriesList from '../../../../../components/CentralSubCategoriesList';
import IconCard from '../../../../../components/IconCard';
import Microscope from '../../img/microscope.png';

export default function ContentCenter(props) {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <CentralCategoriesList title="Grupo 01">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
    </Container>
  );
}
