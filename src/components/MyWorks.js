import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Todo: About me h1 margin & skills margin

const CardStyle = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  .ctn {
    display: flex;
    flex-flow: column;
    border-radius: 0.5em;
    height: 350px;
    grid-column: 1 / 6;
    grid-row: 1 / 1;
    background: red;
    padding: 0 1em;

    h2 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }
    p {
      margin-top: 2rem;
      width: 60%;
    }

    .links {
      display: flex;
      /* flex-flow: column; */

      margin-top: 3rem;
    }

    .icons {
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;
      margin-top: 3rem;
    }
  }
  .preview {
    border-radius: 0.5em;
    background: blue;
    grid-column: 5 / 8;
    grid-row: 1 / 1;
    margin: 1.5rem 0;
    height: 250px;
  }
`;

const MyWorks = () => {
  return (
    <section
      css={css`
        margin-left: 10%;
        display: flex;
        flex-flow: column wrap;
        width: 80%;

        h1 {
          font-size: 3.5rem;
        }
      `}
    >
      <h1>My Works</h1>
      <CardStyle>
        <div className="ctn">
          <h2>Dududu do</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod totam
            <br />
            dolore nemo ullam fugit architecto recusandae <br /> inventore odio
            officiis consectetur, nihil
          </p>
          <div className="links">
            <a href="#a">Live</a>
            <a href="#c">Code</a>
          </div>
          <div className="icons">
            <h3>asd</h3>
            <h3>sad</h3>
            <h3>sad</h3>
            <h3>dsa</h3>
          </div>
        </div>
        <div className="preview">X</div>
      </CardStyle>
    </section>
  );
};

export default MyWorks;
