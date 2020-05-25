import React from 'react';

import IconCard from '../IconCard';
import {
  SideBarItem,
  SideBarHeading,
  SideBarGap,
  CentralHeading,
  Row,
  Title,
} from './styles';

import Microscope from './img/microscope.png';
import RoboticArm from './img/roboticArm.png';

export default function MainContent() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <SideBarHeading>Escolha uma categoria</SideBarHeading>
          <div className="list-group list-group-flush">
            <SideBarItem to="/">Categoria 01</SideBarItem>
            <SideBarItem to="/">Categoria 02</SideBarItem>
            <SideBarItem to="/">Categoria 03</SideBarItem>
            <SideBarItem to="/">Categoria 04</SideBarItem>
            <SideBarItem to="/">Categoria 05</SideBarItem>
            <SideBarItem to="/">Categoria 06</SideBarItem>
          </div>
          <SideBarGap />
          <SideBarHeading>Escolha um laboratório</SideBarHeading>
          <div className="list-group list-group-flush">
            <SideBarItem to="/">Lab 01</SideBarItem>
            <SideBarItem to="/">Lab 02</SideBarItem>
            <SideBarItem to="/">Lab 03</SideBarItem>
            <SideBarItem to="/">Lab 04</SideBarItem>
            <SideBarItem to="/">Lab 05</SideBarItem>
            <SideBarItem to="/">Lab 06</SideBarItem>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <CentralHeading>Todas as categorias</CentralHeading>
            <Row>
              <Title>Categoria 01</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={RoboticArm} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={RoboticArm} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={RoboticArm} cardRoute="/" />
            </Row>
            <Row>
              <Title>Categoria 02</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
            </Row>
            <Row>
              <Title>Categoria 03</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
            </Row>
            <Row>
              <Title>Categoria 04</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
            </Row>
            <Row>
              <Title>Categoria 05</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
            </Row>

            <Row>
              <Title>Categoria 06</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
              <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
