import React from 'react';

import IconCard from '../IconCard';
import {
  StyledLink,
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
            <StyledLink to="/">Categoria 01</StyledLink>
            <StyledLink to="/">Categoria 02</StyledLink>
            <StyledLink to="/">Categoria 03</StyledLink>
            <StyledLink to="/">Categoria 04</StyledLink>
            <StyledLink to="/">Categoria 05</StyledLink>
            <StyledLink to="/">Categoria 06</StyledLink>
          </div>
          <SideBarGap />
          <SideBarHeading>Escolha um laboratório</SideBarHeading>
          <div className="list-group list-group-flush">
            <StyledLink to="/">Lab 01</StyledLink>
            <StyledLink to="/">Lab 02</StyledLink>
            <StyledLink to="/">Lab 03</StyledLink>
            <StyledLink to="/">Lab 04</StyledLink>
            <StyledLink to="/">Lab 05</StyledLink>
            <StyledLink to="/">Lab 06</StyledLink>
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
