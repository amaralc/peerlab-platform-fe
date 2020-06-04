import React from 'react';
import CentralCategoriesList from '../CentralCategoriesList';
import { CentralHeading } from './styles';

function CentralContent(props) {
  return (
    <>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <CentralHeading>{props.title}</CentralHeading>
          <CentralCategoriesList title="Sub Categoria 01" />
          <CentralCategoriesList title="Sub Categoria 02" />
          <CentralCategoriesList title="Sub Categoria 03" />
          <CentralCategoriesList title="Sub Categoria 04" />
        </div>
      </div>
    </>
  );
}

export default CentralContent;
