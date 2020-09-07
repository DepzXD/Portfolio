import React from "react";
import { css } from "@emotion/core";
import BongoCat from "./BongoCat";
import ContainerStyle from "./styles/ContainerStyle";

const AboutMe = () => (
  <ContainerStyle
    id="About-Me"
    css={css`
      .content {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        .left {
          flex: 0 0 50%;
        }
        .right {
          flex: 0 0 40%;
          margin: 0;
          height: inherit;
        }
      }
      p {
        margin-top: 1rem;
        text-align: left;
        line-height: 1.7;
      }
      @media all and (max-width: 414px) {
        p {
          font-size: 0.85rem;
          line-height: 1.95;
        }
        .content {
          margin-top: 2rem;
          .left {
            flex: 0 0 100%;
          }
          .right {
            display: none;
          }
        }
      }
    `}
  >
    <h1>About Me</h1>
    <div className="content">
      <div className="left">
        <p>
          Hi, I'm Deepak Kumar, a passionate self-taught Full stack developer
          from India also known as Depz on the web.
        </p>
        <p>
          I'm currently a third year student at DAV College pursuing my degree
          in Bachelor of Computer Application. I have experience in designing
          and developing software for the web, from simple websites to full
          stack Applications.
        </p>
        <p>
          I always try to learn new and better ways to create applications with
          scalable code. I also like attending Hackathons and Conferences.
        </p>
      </div>
      <div className="right">
        <BongoCat />
      </div>
    </div>
  </ContainerStyle>
);
export default AboutMe;
