import React from 'react';

import { MainContainer } from './styles';

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-dark">
        <MainContainer>
          <p className="m-0 text-center text-white">
            Copyright &copy; peerLab 2020
          </p>
        </MainContainer>
      </footer>
    </>
  );
}
