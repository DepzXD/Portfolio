import React from "react";
import { css } from "@emotion/core";
import ContainerStyle from "./styles/ContainerStyle";
import ButtonStyle from "./styles/ButtonStyle";

const Contact = () => (
  <ContainerStyle
    id="Contact"
    css={css`
      margin: 0;
      align-items: center;
      p {
        margin: 2rem 0;
        width: 45%;
        text-align: center;
      }

      @media all and (max-width: 414px) {
        p {
          margin: 1.5rem 0;
          font-size: 1rem;
          width: 80%;
        }
      }
    `}
  >
    <h1>Let's Connect</h1>
    <p>
      have a project you'd like to discuss or just want to say hi ? <br />
      feel free to send a message!
    </p>
    <ButtonStyle href="mailto:dk721572@gmail.com">Get In Touch</ButtonStyle>
  </ContainerStyle>
);

export default Contact;
