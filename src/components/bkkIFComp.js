import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const bkkIFComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/bkkIF/bkkif_logo.jpg"
          className={css`
            width: 52vw;
            height: auto;
          `}
          alt="BKK IF"
        />
      </div>
      <Caption>
        <h3>Bangkok Illustration Fair</h3>
        <h3>_2020</h3>
        <h4>Logo, Key Visual</h4>
      </Caption>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/bkkIF/bkkif_posterset.jpg"
          className={css`
            width: 76.71vw;
            height: auto;
            margin-top: 5vmin;
          `}
          alt="BKK IF"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/bkkIF/bkkif_macbook.gif"
          className={css`
            width: 58.64vw;
            height: auto;
            margin-top: 20vmin;
          `}
          alt="BKK IF"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/bkkIF/bkkif_elements.jpg"
          className={css`
            width: 64.94vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
          `}
          alt="BKK IF"
        />
      </div>
    </div>
  );
};

export default bkkIFComp;
