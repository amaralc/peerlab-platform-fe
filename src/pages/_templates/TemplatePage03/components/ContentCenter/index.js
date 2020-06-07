import React from 'react';
import { Container, Title } from './styles';

import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CentralServiceList from '../../../../../components/CentralServiceList';

import Ensaio from '../../img/Ensaio.jpg';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <CentralCategoriesList title="Grupo 01">
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 02">
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralCategoriesList>
      <CentralCategoriesList title="Grupo 03">
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CentralServiceList
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
      </CentralCategoriesList>
    </Container>
  );
}
