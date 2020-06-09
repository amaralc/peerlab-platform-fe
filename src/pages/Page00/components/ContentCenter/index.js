import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../components/CentralListOfCategories01';
import CentralListOfCategories02 from '../../../../components/CentralListOfCategories02';
import CentralCard01 from '../../../../components/CentralCard01';
import Microscope from '../../img/microscope.png';
import Furadeira from '../../../../img/manufacturing-macrovector_oficial-01 1.png';
import TornoVert from '../../../../img/manufacturing-macrovector_oficial-01 2.png';
import TornoConv from '../../../../img/manufacturing-macrovector_oficial-01 3.png';
import FresaConv from '../../../../img/manufacturing-macrovector_oficial-01 4.png';
import RetifPLan from '../../../../img/manufacturing-macrovector_oficial-01 7.png';
import TornoCNC from '../../../../img/manufacturing-macrovector-02-c 1.png';
import CorteLaser from '../../../../img/manufacturing-macrovector-02-c 9.png';
import FurBanc from '../../../../img/manufacturing-macrovector-02-c 5.png';
import MicOti1 from '../../../../img/microscopy-nsit0108-01 1.png';
import MicOti2 from '../../../../img/microscopy-nsit0108-01 2.png';
import MicOti3 from '../../../../img/microscopy-nsit0108-01 3.png';
import MicOti4 from '../../../../img/microscopy-nsit0108-01 5.png';
import MicOti5 from '../../../../img/microscopy-nsit0108-01 8.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Fabricação e prototipagem">
          <CentralListOfCategories02 title="Mecânica">
            <CentralCard01
              title="Item"
              imgSrc={Furadeira}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={TornoVert}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={TornoConv}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={FresaConv}
              imgAlt="Microscope"
              route="/"
            />

            <CentralCard01
              title="Item"
              imgSrc={RetifPLan}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={TornoCNC}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={CorteLaser}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={FurBanc}
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
              imgSrc={MicOti1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={MicOti2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={MicOti3}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={MicOti4}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Item"
              imgSrc={MicOti5}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Química">
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
        <CentralListOfCategories01 title="Em desenvolvimento" />
      </Body>
    </Container>
  );
}
