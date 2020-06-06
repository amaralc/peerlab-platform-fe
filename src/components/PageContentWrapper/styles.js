import styled from 'styled-components';

export const Container = styled.div`
  display: -ms-flexbox !important;
  display: flex !important;
  flex-direction: row;
  min-width: 100vw;

  @media (min-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`;
