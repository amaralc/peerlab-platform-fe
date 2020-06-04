import React from 'react';
import CentralCategoriesList from './CentralCategoriesList';
import { CentralHeading } from './styles';

function CentralContent(props) {
  return (
    <>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <CentralHeading>{props.title}</CentralHeading>
          <CentralCategoriesList title="Categoria 01" />
          <CentralCategoriesList title="Categoria 02" />
          <CentralCategoriesList title="Categoria 03" />
          <CentralCategoriesList title="Categoria 04" />
          <CentralCategoriesList title="Categoria 05" />
          <CentralCategoriesList title="Categoria 06" />
        </div>
      </div>
    </>
  );
}

export default CentralContent;
