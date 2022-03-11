import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const FemmeComp = () => {
  return (
    <div
      className={css`
        width: 100vw;
        height: fit-content;
      `}
    >
      <div
        className={css`
          width: 100vw;
          height: 100vmin;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/femme/FMME1.jpeg"
          className={css`
            width: 77.5vw;
            height: auto;
          `}
          alt="Femme"
        />
      </div>
      <Caption>
        <h3>Femme</h3>
        <h3>_2019</h3>
        <h4>Illustration Zine</h4>
      </Caption>
    </div>
  );
};

export default FemmeComp;
