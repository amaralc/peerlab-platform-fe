import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Brand = styled(Link)`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 150px;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;

  color: #fff;

  &:focus,
  :hover {
    text-decoration: none;
    color: #fff;
  }
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

export const Menu = styled.div`
  ul {
  }
`;
