import React from 'react';

// import { Container } from './styles';
import ContentWrapper from './components/ContentWrapper';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';
import ContentCenter from './components/ContentCenter';

function TemplatePage00() {
  return (
    <ContentWrapper>
      <ContentLeft />
      <ContentCenter />
      <ContentRight />
    </ContentWrapper>
  );
}

export default TemplatePage00;
