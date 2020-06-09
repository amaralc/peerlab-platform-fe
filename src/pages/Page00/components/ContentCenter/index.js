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
import Esteira from '../../../../img/manufacturing-microone-01 1.png';
import RetifBanc from '../../../../img/manufacturing-microone-01 4.png';
import Brac1 from '../../../../img/manufacturing-microone-01 2.png';
import Brac2 from '../../../../img/manufacturing-microone-01 3.png';
import Brac3 from '../../../../img/manufacturing-microone-01 8.png';

import MicOti1 from '../../../../img/microscopy-nsit0108-01 1.png';
import MicOti2 from '../../../../img/microscopy-nsit0108-01 2.png';
import MicOti3 from '../../../../img/microscopy-nsit0108-01 3.png';
import MicOti4 from '../../../../img/microscopy-nsit0108-01 5.png';
import MicOti5 from '../../../../img/microscopy-nsit0108-01 8.png';
import Vidraria from '../../../../img/analysis-macrovector-01 1.png';
import Decant from '../../../../img/analysis-macrovector-01 2.png';
import BalAnalit from '../../../../img/analysis-macrovector-01 3.png';
import Espect1 from '../../../../img/analysis-macrovector-01 4.png';
import CentrifTub from '../../../../img/analysis-macrovector-01 6.png';
import Analis1 from '../../../../img/analysis-macrovector-01 7.png';
import Evap from '../../../../img/analysis-macrovector-01 8.png';
import Analis2 from '../../../../img/analysis-macrovector-03 3.png';
import BancEns from '../../../../img/analysis-macrovector-03 2.png';
import Espect2 from '../../../../img/analysis-macrovector-02-b 7.png';
import MicElet from '../../../../img/microscopy-nsit0108-01 9.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Fabricação e prototipagem">
          <CentralListOfCategories02 title="Mecânica">
            <CentralCard01
              title="Furadeira de bancada"
              imgSrc={Furadeira}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno vertical"
              imgSrc={TornoVert}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno convencional"
              imgSrc={TornoConv}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Fresadora convencional"
              imgSrc={FresaConv}
              imgAlt="Microscope"
              route="/"
            />

            <CentralCard01
              title="Retíficadora plana"
              imgSrc={RetifPLan}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Torno CNC"
              imgSrc={TornoCNC}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Corte a Laser"
              imgSrc={CorteLaser}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Furadeira de bancada"
              imgSrc={FurBanc}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Esteira"
              imgSrc={Esteira}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Retificadora de bancada"
              imgSrc={RetifBanc}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Braço robótico industrial"
              imgSrc={Brac3}
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
              title="Microscópio ótico"
              imgSrc={MicOti1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microscópio ótico"
              imgSrc={MicOti2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microscópio ótico"
              imgSrc={MicOti3}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microscópio ótico"
              imgSrc={MicOti4}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microscópio ótico"
              imgSrc={MicOti5}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Microscópio eletrônico"
              imgSrc={MicElet}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="Química">
            <CentralCard01
              title="Vidrarias"
              imgSrc={Vidraria}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Decantadores"
              imgSrc={Decant}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Balança analítica"
              imgSrc={BalAnalit}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Espectrômetro de massa"
              imgSrc={Espect1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Centrífuga para tubos"
              imgSrc={CentrifTub}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Analisador FTIR e NDIR"
              imgSrc={Analis1}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Evaporador"
              imgSrc={Evap}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Análise de composição"
              imgSrc={Analis2}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Bancada de ensaios"
              imgSrc={BancEns}
              imgAlt="Microscope"
              route="/"
            />
            <CentralCard01
              title="Especto-fotômetro"
              imgSrc={Espect2}
              imgAlt="Microscope"
              route="/"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
