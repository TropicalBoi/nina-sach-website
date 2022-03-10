import * as React from "react";
import { css } from "@emotion/css";

const Loading = () => {
  return (
    <div
      className={css`
        height: 100vh;
        width: 100vw;
        background-color: #000000;
        z-index: 100;
      `}
    ></div>
  );
};

export default Loading;
