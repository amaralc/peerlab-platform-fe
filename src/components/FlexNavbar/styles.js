import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  border: solid;
  border-color: #f33;
  background-color: #343a40 !important;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;

export const Brand = styled(Link)`
  font-size: 1.25rem;
  color: #fff;
  border: solid;
  border-color: yellow;
  margin-right: 150px;
  flex-grow: 0;

  &:focus,
  :hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  border: solid;
  border-color: #fff;
  background-color: transparent !important;
`;

export const Button = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0.25rem;

  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-size: 100% 100%;

  &:hover,
  :focus {
    text-decoration: none;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
