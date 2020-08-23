import React from "react";
import { css } from "@emotion/core";

const AboutMe = () => (
  <section
    id="About-Me"
    css={css`
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      /* margin-top: 20%; */
      margin-left: 10%;
      width: 80%;
      h1 {
        font-size: 3.5rem;
        margin-bottom: 3rem;
      }
      .content {
        display: flex;
        justify-content: space-between;
        .left {
          flex: 0 0 50%;
        }
        .right {
          flex: 0 0 40%;
          margin: 0;
          height: inherit;
        }
        .avatar {
          margin: 0;
          background: #131222;
          width: 70%;
          height: 100%;
          border-radius: 20px;
          padding: 1rem;
          text-align: center;
        }
      }
      p {
        text-align: left;
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
