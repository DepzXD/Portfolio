import React from "react";
import { css } from "@emotion/core";

const AboutMe = () => (
  <section
    css={css`
      padding-top: 4rem;
      margin-left: 10%;
      display: flex;
      flex-flow: column wrap;
      align-content: center;

      h1 {
        font-size: 3.5rem;
        margin-left: 4.3rem;
        margin-bottom: 3rem;
      }
      .content {
        justify-content: space-around;
        align-content: center;
        display: flex;

        .left {
          flex: 0 0 50%;
        }
        .right {
          flex: 0 0 30%;
          margin: 0;
          height: inherit;
        }
        .avatar {
          margin: 0 auto;
          background: #131222;
          width: 80%;
          height: 100%;
          border-radius: 20px;
          padding: 1rem;
          text-align: center;
        }
      }
      p {
        line-height: 1.7;
      }
    `}
  >
    <h1>About Me</h1>
    <div className="content">
      <div className="left">
        <p>
          Hi, I'm Deepak Kumar, a passionate self-taught Full stack developer
          from India also know as Depz on web. <br />
          I'm currently a third year student at DAV College pursuing my degree
          in bachelor in computer application. I have experience in designing
          and developing software for the web, from simple websites to full
          stack Applications. <br /> I always try to learn new and better way to
          create applications with scalable code. I'm also like attending
          hackathons and tech conferences.
        </p>
      </div>
      <div className="right">
        <div className="avatar">Javascript</div>
      </div>
    </div>
  </section>
);
export default AboutMe;
