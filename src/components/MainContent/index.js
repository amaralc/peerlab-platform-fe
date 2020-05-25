import React from 'react';

import { StyledLink, SideBarHeading, CentralHeading } from './styles';

export default function MainContent() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <SideBarHeading>Escolha uma categoria</SideBarHeading>
          <div className="list-group list-group-flush">
            <StyledLink to="/">Dashboard</StyledLink>
            <StyledLink to="/">Shortcuts</StyledLink>
            <StyledLink to="/">Overview</StyledLink>
            <StyledLink to="/">Events</StyledLink>
            <StyledLink to="/">Profile</StyledLink>
            <StyledLink to="/">Status</StyledLink>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <CentralHeading>Todas as categorias</CentralHeading>
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>
              The starting state of the menu will appear collapsed on smaller
              screens, and will appear non-collapsed on larger screens. When
              toggled using the button below, the menu will change.
            </p>
            <p>
              Make sure to keep all page content within the{' '}
              <code>#page-content-wrapper</code>. The top navbar is optional,
              and just for demonstration. Just create an element with the{' '}
              <code>#menu-toggle</code> ID which will toggle the menu when
              clicked.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
