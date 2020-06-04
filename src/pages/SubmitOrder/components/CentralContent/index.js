import React from 'react';
import CentralCategoriesList from '../CentralCategoriesList';
import { CentralHeading } from './styles';

function CentralContent(props) {
  return (
    <>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <CentralHeading>{props.title}</CentralHeading>
          <CentralCategoriesList title="Grupo 01" />
          <CentralCategoriesList title="Grupo 02" />
          <CentralCategoriesList title="Grupo 03" />
          <CentralCategoriesList title="Grupo 04" />
        </div>
      </div>
    </>
  );
}

export default CentralContent;
