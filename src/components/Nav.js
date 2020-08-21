import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Line = styled.div`
  height: 17rem;
  width: 0;
  justify-self: center;
  border-radius: 30px;
  border: 1.2px solid ${({ theme }) => theme.lightGray};
  &.top {
    height: 50rem;
  }
`;

const Nav = () => (
  <div
    css={css`
      margin: 0;
      display: flex;
      height: 100vh;
      flex-flow: column nowrap;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
      margin-left: 1rem;
      h1 {
        margin-top: 0;
      }
      position: fixed;
      h4 {
        transform: rotate(-90deg);
        font-weight: 400;
      }
      div {
        margin: 0;
      }
    `}
  >
    <Line className="top" />
    <div
      css={css`
        display: flex;
        flex-flow: column;
        align-content: center;
        height: inherit;
        justify-content: space-evenly;
        flex: 0 0 40;
      `}
    >
      <h4>
        <a href="#Contact">Contact</a>
      </h4>
      <h4>
        <a href="#Projects">Works</a>
      </h4>
      <h4>
        <a href="#About-Me">About</a>
      </h4>
    </div>
    <Line />
  </div>
);

export default Nav;
