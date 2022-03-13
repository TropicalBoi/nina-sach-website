import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const MutualComp = () => {
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
          height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/mutual/thebeforetrilogy-mutual.jpeg"
          className={css`
            position: absolute;
            width: 76.04vw;
            height: auto;
            @media screen and (max-width: 428px) {
              opacity: 0;
            }
          `}
          alt="Star Dust"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/mutual/mutual_mobile.gif"
          className={css`
            position: absolute;
            width: 80%;
            height: auto;
            opacity: 0;
            @media screen and (max-width: 428px) {
              opacity: 1;
            }
          `}
          alt="Star Dust"
        />
      </div>
      <Caption>
        <h3>The Before Trilogy</h3>
        <h3>_2019</h3>
        <h4>Illustration</h4>
      </Caption>
    </div>
  );
};

export default MutualComp;