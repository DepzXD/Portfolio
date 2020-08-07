import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <>
    <Global
      css={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }
        html,
        body {
          margin: 0;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }

        > div {
          margin-top: 0;
        }
      `}
    />
    <main>{children}</main>
  </>
);

export default Layout;
