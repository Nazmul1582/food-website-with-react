import styled from "styled-components";
import { dark, light } from "../../theme";

export const ProductsSection = styled.section`
  padding: 7rem calc((100vw - 1200px) / 2);
  background-color: ${({ theme }) =>
    theme === dark ? dark.background : light.background};
`;
export const ProductsContainer = styled.div`
  color: ${({ theme }) => (theme === dark ? dark.color : light.color)};
`;
export const ProductsHeading = styled.h2`
  text-align: center;
  font-size: clamp(3rem, 5vw, 4.8rem);
  margin-bottom: 5rem;
`;
export const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const ProductCard = styled.div`
  width: 300px;
  margin: 3rem;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 3rem;
  box-shadow: 1px 1px 15px 5px
    ${({ theme }) => (theme === dark ? "#28284e" : "#d0d0e7")};
`;
export const ProductImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export const ProductInfo = styled.div`
  padding: 2rem;
  text-align: center;
  line-height: 2;
`;
export const ProductName = styled.h3`
  font-size: 2.5rem;
`;
export const ProductDesc = styled.p``;
export const ProductPrice = styled.p`
  font-size: 3rem;
  margin: 2rem 0;
`;
