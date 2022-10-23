import styled from "styled-components";
import featureBg from "../../assets/images/pizza2.jpg";

export const FeatureSection = styled.section`
  padding: 5rem calc((100vw - 1200px) / 2);
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url(${featureBg}), no-repeat center;
  background-size: cover;
  color: #fff;
  background-attachment: fixed;
  h2 {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 1rem;
  }
  h3 {
    font-size: clamp(1.6rem, 3vw, 2.5rem);
    margin-bottom: 5rem;
  }
`;

export const FeatureContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
