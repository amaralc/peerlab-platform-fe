import React from 'react';
import { CentralHeading } from './styles';

function CentralContent(props) {
  return (
    <>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <CentralHeading>{props.title}</CentralHeading>
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
}

export default CentralContent;
