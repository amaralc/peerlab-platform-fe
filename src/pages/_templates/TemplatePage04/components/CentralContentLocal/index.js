import React from 'react';
import CentralContent from '../../../../../components/CentralContent';
import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CentralSubCategoriesList from '../../../../../components/CentralSubCategoriesList';
import IconCard from '../../../../../components/IconCard';
import Microscope from '../../img/microscope.png';

function CentralContentLocal() {
  return (
    <CentralContent title="Todas as categorias">
      <CentralCategoriesList title="Grupo 01">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 03">
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 04">
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 05">
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
      </CentralCategoriesList>
    </CentralContent>
  );
}

export default CentralContentLocal;
