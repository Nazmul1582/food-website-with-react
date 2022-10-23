import { Link } from "react-router-dom";
import styled from "styled-components";
import { dark, light } from "../../theme";

export const Btn = styled(Link)`
  padding: 2rem 5rem;
  background: #eb0029;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 1.8rem;
  font-weight: 700;
  transition: 0.25s ease-out;
  &:hover {
    background-color: ${({ theme }) =>
      theme === dark ? light.background : dark.background};
    color: ${({ theme }) => (theme === dark ? light.color : dark.color)};
  }
`;
