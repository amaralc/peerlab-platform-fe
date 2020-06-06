import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 0rem 2rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  background-color: #343a40 !important;

  @media (max-width: 300px) {
    min-width: 270px;
  }

  p {
    margin: 0 !important;
    text-align: center !important;
    color: #fff !important;
  }
`;
