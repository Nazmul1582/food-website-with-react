import { Link } from "react-router-dom";
import styled from "styled-components";
import { dark, light } from "../../theme";

export const Header = styled.header`
  background-color: transparent;
  height: 80px;
  padding: calc((100vw - 1200) / 2);
`;
export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const NavItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px);
  gap: 10px;
  text-align: center;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => (theme === dark ? dark.color : light.color)};
  transition: 0.2s ease-out;
  &:hover {
    color: #e31837;
  }
`;

export const NavRight = styled.div`
  display: grid;
  grid-template-columns: 40px 40px;
  place-items: center;
`;
export const Theme = styled.span`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;
export const MobileMenuIcon = styled.span`
  color: #fff;
  font-size: 2.5rem;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 767.98px) {
    display: block;
  }
`;
