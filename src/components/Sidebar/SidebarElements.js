import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: #ffc500;
  width: 350px;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  height: 100%;
  text-align: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 3rem;
  margin: 2.5rem;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  cursor: pointer;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template: repeat(5, 60px) / 1fr;
  justify-items: center;
  align-items: center;
  margin-bottom: 5rem;
`;
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
`;
