import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import Nav from "./Nav";
import Meta from "./Meta";

const theme = {
  primary: "#fff",
  secondary: "#00EBC7",
  darkGray: "#3B3B45",
  lightGray: "#898898",
  background: "#060515",
  cardPri: "#131222",
  cardSec: "#131132",
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        html,
        body {
          margin: 0;
          font-family: "Open Sans", sans-serif;
          line-height: 1.4;
          background: #060515;
          color: #fff;
        }

        > div {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.1;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
        section {
          height: 100vh;
          display: block;
        }

        @media all and (max-width: 414px) {
          section {
            height: 90vh;
          }
        }
        ::-webkit-scrollbar {
          width: 7px;
        }
        ::-webkit-scrollbar-track {
          background-color: rgba(25, 147, 147, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background-color: rgba(0, 235, 199, 0.6);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 235, 199, 1);
        }
      `}
    />
    <Meta />
    <div
      css={css`
        display: flex;
      `}
    ></div>
    <Nav />
    <main
      css={css`
        flex: 0 0 80;
        display: flex;
        margin: 0;
        flex-flow: column;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
      `}
    >
      {children}
    </main>
  </ThemeProvider>
);

export default Layout;
