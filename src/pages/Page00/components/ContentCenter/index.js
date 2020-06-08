import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../components/CentralListOfCategories01';
import CentralListOfCategories02 from '../../../../components/CentralListOfCategories02';
import CentralCard01 from '../../../../components/CentralCard01';
import Microscope from '../../img/microscope.png';
// import furadeira from '../../../../img/manufacturing-macrovector_oficial-01 1.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Fabricação e prototipagem">
          <CentralListOfCategories02 title="Mecânica">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Elétrica">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Medição e análise">
          <CentralListOfCategories02 title="Microscopia">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Análise">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
