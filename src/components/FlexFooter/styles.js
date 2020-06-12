import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  flex-shrink: 0;

  height: 60px;
  width: 100%;
  padding: 1rem !important;
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
