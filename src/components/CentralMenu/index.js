import React from 'react';
import { DFlex, CentralHeading, Row, Title } from './styles';
import IconCard from '../IconCard';

import Microscope from '../../pages/Home/img/microscope.png';
import RoboticArm from '../../pages/Home/img/roboticArm.png';

export default function CentralMenu(props) {
  return (
    <DFlex>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <CentralHeading>Todas as categorias</CentralHeading>
          <Row>
            <Title>{props.title}</Title>
            <IconCard
              cardText={props.name}
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
            <IconCard
              cardText="test"
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
            <IconCard
              cardText="test"
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
            <IconCard
              cardText="test"
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
            <IconCard
              cardText="test"
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
            <IconCard
              cardText="test"
              cardImgSrc={props.imgPath}
              cardRoute="/"
            />
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
    </DFlex>
  );
}
