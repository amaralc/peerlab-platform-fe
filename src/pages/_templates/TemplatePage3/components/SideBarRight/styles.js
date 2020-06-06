import styled from 'styled-components';

export const Div = styled.div`
  display: -ms-flexbox !important;
  display: flex !important;
  flex-grow: 1;
  height: 100%;
  width: 200px;
  z-index: 1;
  margin-right: 0px;
  margin-left: -16px;
`;

export const SideNav = styled.div`
  background-color: #f8f9fa !important;
  border-left: 1px solid #dee2e6 !important;
  position: fixed;
  z-index: 1;
  flex-grow: 1;
  height: 100%;
  min-height: 100vh;
  margin-right: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  @media (min-width: 768px) {
    margin-right: 0;
  }
`;
