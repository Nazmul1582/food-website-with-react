import { Link } from "react-router-dom";
import styled from "styled-components";
import { dark, light } from "../../theme";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => (theme === dark ? "#111" : "#f9f9f9")};
  color: ${({ theme }) => (theme === dark ? dark.color : light.color)};
  padding: 3rem calc((100vw - 1300px) / 2);
`;
export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 10px;
`;
export const SocialIcons = styled.div`
  display: grid;
  grid-template: 50px / repeat(5, 50px);
  place-items: center;
`;
export const SocialIconsLink = styled(Link)`
  color: ${({ theme }) => (theme === dark ? dark.color : light.color)};
  text-decoration: none;
  font-size: 2.5rem;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.5);
  }
`;
