import React from 'react';
import { Container, Title, List } from './styles';
import SideBarItem from '../../../../../components/SideBarItem';

export default function ContentLeft() {
  return (
    <Container>
      <div>
        <Title>Template Title 01</Title>
        <List>
          <SideBarItem itemName="Template Item 01" />
          <SideBarItem itemName="Template Item 02" />
          <SideBarItem itemName="Template Item 03" />
        </List>
      </div>
      <div>
        <Title>Template Title 02</Title>
        <List>
          <SideBarItem itemName="Template Item 01" />
          <SideBarItem itemName="Template Item 02" />
          <SideBarItem itemName="Template Item 03" />
        </List>
      </div>
    </Container>
  );
}
