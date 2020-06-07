import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
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

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  object-fit: cover;
`;

export const InfoTitle = styled.div`
  padding-top: 1rem;
  font-weight: 600;
  font-size: 16px;
  height: 48;
  line-height: 16px;
  color: #333333;
`;

export const InfoText = styled.div`
  padding: 0.25rem 0;
  font-size: 14px;
  width: 100%;
  word-break: normal;
`;
