import React from "react";
import {
  Header,
  Nav,
  NavItems,
  NavLink,
  NavRight,
  Theme,
  MobileMenuIcon,
} from "./NavbarElements";
import Logo from "../Logo";
import { FaRegMoon, FaBars } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function Navbar({ lightMode, changeTheme, toggle }) {
  console.log(lightMode);
  return (
    <Header>
      <Nav>
        <Logo />
        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Menu</NavLink>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/">Contact</NavLink>
        </NavItems>
        <NavRight>
          <Theme onClick={changeTheme}>
            {!lightMode ? <BsSunFill /> : <FaRegMoon />}
          </Theme>
          <MobileMenuIcon onClick={toggle}>
            <FaBars />
          </MobileMenuIcon>
        </NavRight>
      </Nav>
    </Header>
  );
}
