import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 0rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  background-color: #343a40 !important;
  position: absolute;
  z-index: 1;

  @media (max-width: 300px) {
    min-width: 270px;
  }

  p {
    margin: 0 !important;
    text-align: center !important;
    color: #fff !important;
  }
`;
