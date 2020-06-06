import styled from 'styled-components';

export const Container = styled.div`
  display: -ms-flexbox !important;
  display: flex !important;
  flex-direction: column;
  margin-left: 0;
  border: solid;
  border-color: #f00;

  position: relative;

  @media (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

export const Title = styled.div`
  padding: 0.5rem 0.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;
