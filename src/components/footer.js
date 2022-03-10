import * as React from "react";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <footer
      className={css`
        position: relative;
        bottom: 0;
        height: 4.16vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        color: #e5e5e5;
        z-index: 100;
      `}
    >
      <p
        className={css`
          margin-right: 1.5vw;
          font-family: Monument Extended;
          font-style: normal;
          font-weight: normal;
          font-size: 9px;
        `}
      >
        NINASACH © 2022
      </p>
    </footer>
  );
};

export default Footer;
