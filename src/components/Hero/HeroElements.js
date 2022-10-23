import styled from "styled-components";
import heroBg from "../../assets/images/pizza1.jpg";
import { dark } from "../../theme";

export const HeroSection = styled.section`
  background: ${({ theme }) =>
    theme === dark
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${heroBg}), no-repeat center`
      : `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${heroBg}), no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  padding: 0 calc((100vw - 1200) / 2);
`;

export const HeroWrap = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
`;
export const HeroContent = styled.div`
  width: 600px;
  padding: 2rem;
  color: #fff;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const HeroHeading = styled.h1`
  font-size: clamp(3rem, 10vw, 5rem);
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;
export const HeroDesc = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;
`;
