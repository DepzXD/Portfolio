import React, { useEffect, useRef } from "react";
import { css } from "@emotion/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContainerStyle, { SocialLinks, Line } from "./styles/ContainerStyle";
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
      <SocialLinks>
        <Line />
        <div className="links">
          <a href="https://twitter.com/DepzXD" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="29.238"
              viewBox="0 0 36 29.238"
            >
              <path
                id="Icon_awesome-twitter"
                data-name="Icon awesome-twitter"
                d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                transform="translate(0 -3.381)"
                fill="#9b9b9b"
              />
            </svg>
          </a>
          <a href="https://github.com/DepzXD" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.987"
              height="34.004"
              viewBox="0 0 32.987 34.004"
            >
              <path
                id="Icon_awesome-github"
                data-name="Icon awesome-github"
                d="M11.033,27.942c0,.141-.153.253-.346.253-.219.021-.372-.091-.372-.253,0-.141.153-.253.346-.253C10.861,27.668,11.033,27.78,11.033,27.942Zm-2.068-.316c-.047.141.086.3.286.345a.3.3,0,0,0,.412-.141c.04-.141-.086-.3-.286-.366A.334.334,0,0,0,8.965,27.626Zm2.94-.12c-.193.049-.326.183-.306.345.02.141.193.232.392.183s.326-.183.306-.323S12.1,27.485,11.9,27.506ZM16.281.563C7.056.563,0,7.966,0,17.719c0,7.8,4.642,14.47,11.273,16.819a.858.858,0,0,0,1.151-.851c0-.436-.02-2.841-.02-4.317,0,0-4.655,1.055-5.633-2.1,0,0-.758-2.046-1.849-2.573,0,0-1.523-1.1.106-1.083A3.482,3.482,0,0,1,7.6,25.432a3.411,3.411,0,0,0,4.848,1.47,4,4,0,0,1,1.064-2.37c-3.718-.436-7.469-1.005-7.469-7.77a5.488,5.488,0,0,1,1.57-4.141,7,7,0,0,1,.173-4.774c1.39-.457,4.589,1.9,4.589,1.9a14.893,14.893,0,0,1,8.353,0s3.2-2.363,4.589-1.9a7,7,0,0,1,.173,4.774A5.61,5.61,0,0,1,27.2,16.762c0,6.785-3.917,7.327-7.635,7.77A4.287,4.287,0,0,1,20.7,27.795c0,2.37-.02,5.3-.02,5.878a.86.86,0,0,0,1.151.851c6.651-2.334,11.16-9.007,11.16-16.8A16.763,16.763,0,0,0,16.281.563ZM6.464,24.813c-.086.07-.067.232.047.366.106.112.259.162.346.07.086-.07.067-.232-.047-.366C6.7,24.771,6.551,24.722,6.464,24.813Zm-.718-.57c-.047.091.02.2.153.274a.192.192,0,0,0,.286-.049c.047-.091-.02-.2-.153-.274C5.9,24.152,5.793,24.173,5.746,24.244Zm2.155,2.5c-.106.091-.067.3.086.436.153.162.346.183.432.07.086-.091.047-.3-.086-.436C8.187,26.655,7.987,26.634,7.9,26.747Zm-.758-1.034c-.106.07-.106.253,0,.415s.286.232.372.162a.334.334,0,0,0,0-.436C7.422,25.692,7.249,25.622,7.143,25.713Z"
                transform="translate(0 -0.563)"
                fill="#9b9b9b"
              />
            </svg>
          </a>
          <a href="www.linkedin.com/in/depzxd/" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Icon_awesome-linkedin"
                data-name="Icon awesome-linkedin"
                d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z"
                transform="translate(0 -2.25)"
                fill="#9b9b9b"
              />
            </svg>
          </a>
          <a href="https://codepen.io/DepzXD" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path
                id="Icon_awesome-codepen"
                data-name="Icon awesome-codepen"
                d="M35.317,11.229,18.864.26a1.563,1.563,0,0,0-1.728,0L.683,11.229A1.573,1.573,0,0,0,0,12.515V23.484a1.573,1.573,0,0,0,.683,1.286L17.136,35.74a1.563,1.563,0,0,0,1.728,0l16.453-10.97A1.573,1.573,0,0,0,36,23.484V12.515a1.573,1.573,0,0,0-.683-1.286Zm-15.77-6.79,12.114,8.076-5.4,3.616-6.71-4.48Zm-3.094,0v7.212l-6.71,4.48-5.4-3.616ZM3.094,15.408,6.971,18,3.094,20.591ZM16.453,31.56,4.339,23.484l5.4-3.616,6.71,4.48ZM18,21.655,12.536,18,18,14.343,23.464,18Zm1.547,9.9V24.347l6.71-4.48,5.4,3.616ZM32.906,20.591,29.029,18l3.877-2.592Z"
                fill="#9b9b9b"
              />
            </svg>
          </a>
        </div>
        <Line />
      </SocialLinks>
    </ContainerStyle>
  );
};

export default Contact;
