import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;

  border: solid;
  border-color: #f33;
  background-color: #343a40 !important;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;
