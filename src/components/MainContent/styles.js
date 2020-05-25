import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0.25rem 1.25rem;
  background-color: #f8f9fa !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  width: 100%;
  color: #495057;
  text-align: inherit;

  &:hover,
  &:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
    background-color: #dae0e5 !important;
  }

  &:active {
    color: #212529;
    background-color: #e9ecef;
    background-color: #dae0e5 !important;
  }
`;

export const SideBarHeading = styled.div`
  padding: 0.375rem 1.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const CentralHeading = styled.div`
  padding: 0.375rem;
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
`;
