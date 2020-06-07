import React from 'react';
import { Container, Title, List } from './styles';
import SideBarLabCard from '../../../../../components/SideBarLabCard';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarLabCard
            title="LMP"
            subtitle="Laboratório de Mecânica de Precisão"
            imgPath={Lmp}
          />
          <SideBarLabCard
            title="LMP"
            subtitle="Laboratório de Mecânica de Precisão"
            imgPath={Lmp}
          />
        </List>
      </div>
    </Container>
  );
}
