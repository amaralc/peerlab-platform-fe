import React from 'react';

import IconCard from '../IconCard';
import {
  StyledLink,
  SideBarHeading,
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
            <StyledLink to="/">Dashboard</StyledLink>
            <StyledLink to="/">Shortcuts</StyledLink>
            <StyledLink to="/">Overview</StyledLink>
            <StyledLink to="/">Events</StyledLink>
            <StyledLink to="/">Profile</StyledLink>
            <StyledLink to="/">Status</StyledLink>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <CentralHeading>Todas as categorias</CentralHeading>
            <Row>
              <Title>Test</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={RoboticArm} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
            </Row>
            <Row>
              <Title>Test</Title>
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
              <IconCard cardText="test" cardImgSrc={Microscope} />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
