import React from 'react';

import { Container } from './styles';

function SideBarItem(props) {
  return (
    <>
      <Container to="/">{props.itemName}</Container>
    </>
  );
}

export default SideBarItem;
