import React from "react";
import { css } from "@emotion/core";
import ContainerStyle from "./styles/ContainerStyle";
import ButtonStyle from "./styles/ButtonStyle";

const Hero = () => (
  <ContainerStyle id="Hero" hero>
    <h3>Deepak Kumar</h3>
    <h1>
      Designer <br /> & Developer
    </h1>
    <ButtonStyle
      href="mailto:dk721572@gmail.com"
      css={css`
        margin-right: 9rem;
        margin-top: 3rem;
        align-self: center;

        @media all and (max-width: 414px) {
          margin-right: 2.25rem;
        }
      `}
    >
      Get In Touch
    </ButtonStyle>
  </ContainerStyle>
);

export default Hero;