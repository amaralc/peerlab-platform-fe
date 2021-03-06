import React from 'react';
import { Container, Title, Body } from './styles';

import CentralListOfCategories01 from '../../../../../components/CentralListOfCategories01';
import CentralListOfCategories02 from '../../../../../components/CentralListOfCategories02';
import CentralCard01 from '../../../../../components/CentralCard01';
import Microscope from '../../img/microscope.png';

export default function ContentCenter() {
  return (
    <Container>
      <Title>Todas as categorias</Title>
      <Body>
        <CentralListOfCategories01 title="Grupo 01">
          <CentralListOfCategories02 title="SubCategory 01">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="SubCategory 02">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="SubCategory 02">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
        <CentralListOfCategories01 title="Grupo 02">
          <CentralListOfCategories02 title="SubCategory 01">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="SubCategory 02">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
          <CentralListOfCategories02 title="SubCategory 02">
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
            <CentralCard01
              title="Item"
              imgSrc={Microscope}
              imgAlt="Microscope"
              route="/template-page-03"
            />
          </CentralListOfCategories02>
        </CentralListOfCategories01>
      </Body>
    </Container>
  );
}
