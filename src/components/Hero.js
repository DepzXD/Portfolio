import styled from "@emotion/styled";
import React from "react";

const HeroStyles = styled.section`
  h3 {
    font-size: 45.23px;
    font-weight: 300;
    color: ${({ theme }) => theme.lightGray};
  }

  h1 {
    font-size: 90.44px;
    margin-top: 0.3rem;
  }
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
`;

const BtnStyle = styled.button`
  background: none;
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.8rem;
  font-weight: 600;
  max-width: 10rem;
  margin-left: 9rem;
  margin-top: 3rem;
  a {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Hero = () => (
  <HeroStyles>
    <h3>Deepak Kumar</h3>
    <h1>
      Designer <br /> & Developer
    </h1>
    <BtnStyle>
      <a href="mailto:dk721572@gmail.com">Get In Touch</a>
    </BtnStyle>
  </HeroStyles>
);

export default Hero;
