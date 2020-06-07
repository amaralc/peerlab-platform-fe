import React from 'react';
import { Container, Title } from './styles';

import CentralCategoriesList from '../../../../../components/CentralCategoriesList';
import CardService from '../../../../../components/CardService';

import Ensaio from '../../img/Ensaio.jpg';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <CentralCategoriesList title="Grupo 01">
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CardService
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
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CardService
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
        <CardService
          imgPath={Ensaio}
          title="Ensaio de tração"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        egestas mi commodo, hendrerit urna ut, feugiat purus. Nulla volutpat, erat."
          contact="(48)999999999"
          url="/"
          button="Solicite"
        />
        <CardService
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
