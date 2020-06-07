import React from 'react';
import { Container, Title, List } from './styles';
import SideBarItem from '../../../../../components/SideBarItem';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarItem itemName="Template Item 01" route="/template-page-02" />
          <SideBarItem itemName="Template Item 02" route="/template-page-02" />
          <SideBarItem itemName="Template Item 03" route="/template-page-02" />
        </List>
      </div>
      <div>
        <Title>Template Title 02</Title>
        <List>
          <SideBarItem itemName="Template Item 01" route="/template-page-02" />
          <SideBarItem itemName="Template Item 02" route="/template-page-02" />
          <SideBarItem itemName="Template Item 03" route="/template-page-02" />
        </List>
      </div>
    </Container>
  );
}
