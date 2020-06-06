import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
