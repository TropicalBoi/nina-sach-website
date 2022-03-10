import * as React from "react";
import { css } from "@emotion/css";

export default function Caption({ children }) {
  return (
    <div
      className={css`
        position: fixed;
        display: block;
        bottom: 0;
        left: 0;
        width: fit-content;
        height: fit-content;
        text-align: left;
        margin-left: 1.56vw;
        margin-bottom: 1.56vw;
        z-index: 10;
        @media screen and (max-width: 428px) {
          margin-left: 3vw;
          margin-bottom: 3vw;
        }
      `}
    >
      {children}
    </div>
  );
}
