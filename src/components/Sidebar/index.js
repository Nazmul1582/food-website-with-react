import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import Button from "../Button";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">About</SidebarLink>
        <SidebarLink to="/">Menu</SidebarLink>
        <SidebarLink to="/">Shop</SidebarLink>
        <SidebarLink to="/">Contact</SidebarLink>
      </SidebarMenu>
      <Button>Order Now</Button>
    </SidebarContainer>
  );
};

export default Sidebar;
