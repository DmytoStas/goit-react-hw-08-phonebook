import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled('ul')`
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: 22px;

  list-style: none;
`;

export const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  transition: color 0.3s ease;

  :last-child {
    margin-right: 0;
  }

  ul &:hover,
  ul &:focus,
  ul &.active {
    color: #1976d2;
  }
`;
