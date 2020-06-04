import React from 'react';
import { Row, Title } from './styles';
import IconCard from '../IconCard';

import Microscope from '../../pages/Home/img/microscope.png';

export default function CentralCategoriesList(props) {
  return (
    <Row>
      <Title>{props.title}</Title>

      <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
      <IconCard cardText="test" cardImgSrc={Microscope} cardRoute="/" />
    </Row>
  );
}
