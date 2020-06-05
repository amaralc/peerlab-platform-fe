import React from 'react';

import { Container } from './styles';

function PageContentWrapper(props) {
  return <Container>{props.children}</Container>;
}

export default PageContentWrapper;
