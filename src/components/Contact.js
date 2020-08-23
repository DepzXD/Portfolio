import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const BtnStyle = styled.button`
  background: none;
  color: ${({ theme }) => theme.secondary};
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.8rem;
  font-weight: 600;
  max-width: 10rem;
  a {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Contact = () => (
  <section
    id="Contact"
    css={css`
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 80%;

      h1 {
        font-size: 3.5rem;
      }

      p {
        margin: 2rem 0;
        width: 45%;
        text-align: center;
      }
    `}
  >
    <h1>Let's Connect</h1>
    <p>
      have a project you'd like to discuss or just want to say hi ? <br />
      feel free to send a message!
    </p>
    <BtnStyle>
      <a href="mailto:dk721572@gmail.com">Get In Touch</a>
    </BtnStyle>
  </section>
);

export default Contact;
