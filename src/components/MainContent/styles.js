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

export const DFlex = styled.div`
  display: -ms-flexbox !important;
  display: flex !important;
`;

export const SideNav = styled.div`
  background-color: #f8f9fa !important;
  border-right: 1px solid #dee2e6 !important;
  position: fixed;
  z-index: 1;
`;

export const ListGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  width: 15rem;
`;

export const SideBarItem = styled(Link)`
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
  padding: 0.5rem 1.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const SideBarGap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
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
