import styled from 'styled-components';

export const CentralContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;
export const DFlex = styled.div`
  display: -ms-flexbox !important;
  display: flex !important;
`;

export const CentralHeading = styled.div`
  padding: 0.5rem 0.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ffd90033;

  &:last-child {
    margin-bottom: 3rem;
    border-bottom: none;
  }
`;

export const Title = styled.h1`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #495057;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
`;
