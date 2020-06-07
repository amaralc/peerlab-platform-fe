import React from 'react';
import { Container, Title } from './styles';

import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CentralSubCategoriesList from '../../../../../components/CentralSubCategoriesList';
import IconCard from '../../../../../components/IconCard';
import Microscope from '../../img/microscope.png';

import CardService from '../../../../../components/CardService';
import Ensaio from '../../img/Ensaio.jpg';

export default function ContentCenter() {
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
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <CentralSubCategoriesList title="SubCategory 01">
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
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 03">
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 04">
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralCategoriesList>
    </Container>
  );
}
