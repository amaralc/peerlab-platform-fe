import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background-color: #f8f9fa !important;
  border-right: 1px solid #dee2e6 !important;

  position: relative;

  z-index: 0;
  border: solid;
  border-color: #00f;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.div`
  padding: 0.5rem 1.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const List = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  width: 15rem;
`;

export const Gap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;
