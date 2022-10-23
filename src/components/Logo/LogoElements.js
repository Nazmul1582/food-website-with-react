import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoRoute = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  img {
    width: 50px;
    height: 100%;
  }
  span {
    font-size: 3rem;
    font-weight: 900;
    color: #ffc500;
  }
`;
