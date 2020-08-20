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
    background: ${({ theme }) => theme.cardPri};
    padding: 2em;

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
      margin-top: 3rem;
    }
    a {
      align-self: center;
      color: #fff;
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
    background: ${({ theme }) => theme.cardSec};
    grid-column: 5 / 8;
    grid-row: 1 / 1;
    margin: 2rem 0;
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
            <a href="#a">
              Live
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.183"
                  height="23.666"
                  viewBox="0 0 25.183 23.666"
                >
                  <path
                    id="Icon_awesome-external-link-alt"
                    data-name="Icon awesome-external-link-alt"
                    d="M25.183,1.109V7.025a1.044,1.044,0,0,1-1.791.784L21.831,6.159,11.184,17.415a1.01,1.01,0,0,1-1.484,0L8.71,16.369a1.155,1.155,0,0,1,0-1.569L19.357,3.544,17.8,1.894A1.119,1.119,0,0,1,18.539,0h5.6A1.081,1.081,0,0,1,25.183,1.109ZM17.8,12.517l-.7.74a1.142,1.142,0,0,0-.307.784v6.667H2.8V5.916H14.34a1.021,1.021,0,0,0,.742-.325l.7-.74a1.118,1.118,0,0,0-.742-1.894H2.1A2.161,2.161,0,0,0,0,5.177v16.27a2.161,2.161,0,0,0,2.1,2.219h15.39a2.161,2.161,0,0,0,2.1-2.219V13.3A1.043,1.043,0,0,0,17.8,12.517Z"
                    fill="#f3f3f3"
                  />
                </svg>
              </span>
            </a>
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
