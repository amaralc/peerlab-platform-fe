import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { NavbarContainer } from './styles';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavbarContainer>
          <Link className="navbar-brand" to="/">
            peerLab
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <NavItem item="Home" route="/" />
              <NavItem item="About" route="/" />
              <NavItem item="Services" route="/" />
              <NavItem item="Contact" route="/" />
            </ul>
          </div>
        </NavbarContainer>
      </nav>
    </>
  );
}
