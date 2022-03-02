import * as React from "react";
import { css } from "@emotion/css";

const Footer = () => {
  return (
    <footer
      className={css`
        position: absolute;
        bottom: 0;
        height: 10.55vh;
        width: 100vw;
        font-family: Monument Extended;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 28px;
        color: #e5e5e5;
        z-index: 99;
      `}
    >
      <p
        className={css`
          margin-left: 80px;
        `}
      >
        NINASACH © 2022
      </p>
    </footer>
  );
};

export default Footer;