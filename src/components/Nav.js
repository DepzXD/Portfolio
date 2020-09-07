import React from "react";
import jump from "jump.js";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Line = styled.div`
  height: 17rem;
  width: 0;
  justify-self: center;
  border-radius: 30px;
  border: 0.2px solid ${({ theme }) => theme.lightGray};
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
      position: fixed;
      h4 {
        &:hover {
          a {
            color: #00ebc7;
          }
        }
        transform: rotate(-90deg);
        font-weight: 400;
      }
      button {
        border: none;
        background: none;
        font-weight: 400;
        color: #fff;
        outline: 0;
        font-size: inherit;
        cursor: pointer;
        &:hover {
          color: #00ebc7;
        }
      }
      div {
        margin: 0;
      }

      @media all and (max-width: 414px) {
        display: none;
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
        <button onClick={() => jump("#Contact")}>Contact</button>
      </h4>
      <h4>
        <button onClick={() => jump("#Projects")}>Works</button>
      </h4>
      <h4>
        <button onClick={() => jump("#About-Me")}>About</button>
      </h4>
    </div>
    <Line />
  </div>
);

export default Nav;
