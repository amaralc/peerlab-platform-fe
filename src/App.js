import React from 'react';
import './App.css';

import AppWrapper from './components/AppWrapper';
import FlexNavbar from './components/FlexNavbar';
import FlexFooter from './components/FlexFooter';

export default function App(props) {
  return (
    <AppWrapper>
      <FlexNavbar />
      <main>{props.children}</main>
      <FlexFooter />
    </AppWrapper>
  );
}
