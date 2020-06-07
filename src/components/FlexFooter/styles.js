import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  flex: 0 0 60px;
  width: 100%;
  padding: 1rem !important;
  background-color: #343a40 !important;

  border: solid;
  border-color: magenta;

  @media (max-width: 300px) {
    min-width: 270px;
  }

  p {
    margin: 0 !important;
    text-align: center !important;
    color: #fff !important;
  }
`;
