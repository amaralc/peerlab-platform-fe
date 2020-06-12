import React from 'react';
import './App.css';

import AppWrapper from './components/AppWrapper';
import FlexNavbar from './components/FlexNavbar';
import ContentWrapper from './components/ContentWrapper';
import FlexFooter from './components/FlexFooter';

export default function App(props) {
  return (
    <AppWrapper>
      <FlexNavbar />
      <ContentWrapper>{props.children}</ContentWrapper>
      <FlexFooter />
    </AppWrapper>
  );
}
