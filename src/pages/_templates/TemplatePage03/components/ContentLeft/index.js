import React from 'react';
import { Container, Title, List } from './styles';
import SideBarCard02 from '../../../../../components/SideBarCard02';
import Lmp from '../../img/lmp.png';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarCard02
            title="LABSOLDA"
            subtitle="Instituto de Soldagem e Mecatrônica"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
            imgPath={Lmp}
            route="/"
          />
        </List>
      </div>
    </Container>
  );
}
