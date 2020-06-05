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
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 03">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 04">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 03">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 03">
        <CentralSubCategoriesList title="SubCategory 01">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 02">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
        <CentralSubCategoriesList title="SubCategory 03">
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
          <IconCard cardText="Item" cardImgSrc={Microscope} cardRoute="/" />
        </CentralSubCategoriesList>
      </CentralCategoriesList>
    </CentralContent>
  );
}

export default CentralContentLocal;
