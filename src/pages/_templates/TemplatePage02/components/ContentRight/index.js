import React from 'react';
import { Container, Title, List } from './styles';
import SideBarCard01 from '../../../../../components/SideBarCard01';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarCard01
            title="LMP"
            subtitle="Laboratório de Mecânica de Precisão"
            imgPath={Lmp}
            route="/template-page-03"
          />
          <SideBarCard01
            title="LMP"
            subtitle="Laboratório de Mecânica de Precisão"
            imgPath={Lmp}
            route="/template-page-03"
          />
        </List>
      </div>
    </Container>
  );
}
