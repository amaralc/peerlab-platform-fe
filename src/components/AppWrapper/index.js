import React from 'react';

import { Container } from './styles';

function AppWrapper(props) {
  return <Container>{props.children}</Container>;
}

export default AppWrapper;
