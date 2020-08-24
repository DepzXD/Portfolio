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

// 7.594em (121.50px)
// 5.063em (81.00px)
// 3.375em (54.00px)
// 2.25em (36.00px)
// 1.5em (24.00px)
// 1em (16.00px)
// 0.667em (10.67px)
// 0.444em (7.11px)
// 0.296em (4.74px)
