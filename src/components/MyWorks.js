import React from "react";
import { css } from "@emotion/core";

// Todo: About me h1 margin & skills margin
// Todo: OverLap components
const MyWorks = () => {
  return (
    <section
      css={css`
        margin-left: 10%;

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        width: 80%;

        h1 {
          font-size: 3.5rem;
        }
      `}
    >
      <h1>My Works</h1>
      <div
        css={css`
          margin-top: 2rem;
          width: 100%;
          display: flex;
          div {
            border-radius: 5px;
            padding: 2rem;
          }
          .xtn {
            flex: 0 0 70%;
            height: 20rem;
            background: #131222;
            display: flex;
            flex-flow: column wrap;

            justify-items: center;
            p {
              margin-top: 1rem;
            }
            a {
              width: auto;
            }
          }
          .xtn-image {
            flex: 0 0 30%;
            height: 20rem;
            background: #130022;
          }
        `}
      >
        <div className="xtn">
          <h2>Dududu do</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod totam
            <br />
            dolore nemo ullam fugit architecto recusandae <br /> inventore odio
            officiis consectetur, nihil
          </p>
          <>
            <a href="#a">Live</a>
            <a href="#c">Code</a>
          </>
        </div>
        <div className="xtn-image">X</div>
      </div>
    </section>
  );
};

export default MyWorks;
