import React, { useEffect, useRef } from "react";
import { css } from "@emotion/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContainerStyle from "./styles/ContainerStyle";
import ButtonStyle from "./styles/ButtonStyle";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { autoAlpha: 0, y: 30 },
      {
        duration: 0.9,
        autoAlpha: 1,
        ease: "none",
        y: 0,
        scrollTrigger: contactRef.current,
      }
    );
  });
  return (
    <ContainerStyle
      ref={contactRef}
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
            font-size: 0.85rem;
            width: 80%;
          }
        }
      `}
    >
      <h1>Let's Connect</h1>
      <p>
        have a project you'd like to discuss or just want to say hi ? <br />
        feel free to Drop a message!
      </p>
      <ButtonStyle href="mailto:dk721572@gmail.com">Get In Touch</ButtonStyle>
    </ContainerStyle>
  );
};

export default Contact;
