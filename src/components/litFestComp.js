import * as React from "react";
import { css } from "@emotion/css";

const LetFestComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/LIT_Cov.jpeg"
          className={css`
            width: 57.91vw;
            height: auto;
          `}
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/R-FB-G-01.jpeg"
          className={css`
            width: 53.54vw;
            height: auto;
            margin-top: 20vmin;
          `}
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/lit-wristband.jpg"
          className={css`
            width: 70.98vw;
            height: auto;
            margin-top: 20vmin;
          `}
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/litsticker_set.jpg"
          className={css`
            width: 70.98vw;
            height: auto;
            margin-top: 10vmin;
          `}
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/KV-S-FB-G-01.jpeg"
          className={css`
            width:  31.51vw;
            height: auto;
            margin: 10vmin 2vw;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/KV-S-FB-G-02.jpeg"
          className={css`
            width: 31.51vw;
            height: auto;
            margin: 10vmin 2vw 0 2vw;
          `}
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_1.jpeg"
          className={css`
            width:  25.15vw;
            height: auto;
            margin: 10vmin 1vw;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_2.jpg"
          className={css`
            width: 25.15vw;
            height: auto;
            margin: 10vmin 1vw;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_3.jpeg"
          className={css`
            width: 25.15vw;
            height: auto;
            margin: 10vmin 1vw;
          `}
        />
      </div>
    </div>
  );
};

export default LetFestComp;
