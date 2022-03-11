import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

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
          height: 100vh;
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
            @media screen and (max-width: 428px) {
              width: 80%
            }
          `}
          alt="Lit Fest2"
        />
      </div>
      <Caption>
        <h3>LIT FEST 2</h3>
        <h3>_2020</h3>
        <h4>Key Visual</h4>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/R-FB-G-01.jpeg"
          className={css`
            width: 53.54vw;
            height: auto;
            margin-top: 20vmin;
            @media screen and (max-width: 428px) {
              width: 80%
            }
          `}
          alt="Lit Fest2"
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
            @media screen and (max-width: 428px) {
              width: 90%
            }
          `}
          alt="Lit Fest2"
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
            @media screen and (max-width: 428px) {
              width: 90%
            }
          `}
          alt="Lit Fest2"
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
          alt="Lit Fest2"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/KV-S-FB-G-02.jpeg"
          className={css`
            width: 31.51vw;
            height: auto;
            margin: 10vmin 2vw 0 2vw;
          `}
          alt="Lit Fest2"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_1.jpeg"
          className={css`
            width:  25.15vw;
            height: auto;
            margin: 10vmin 1vw 20vmin 1vw;
            @media screen and (max-width: 428px) {
              width: 70%;
              margin: 10vmin 1vw 1vw 1vw;
            }
          `}
          alt="Lit Fest2"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_2.jpg"
          className={css`
            width: 25.15vw;
            height: auto;
            margin: 10vmin 1vw 20vmin 1vw;
            @media screen and (max-width: 428px) {
              width: 70%;
              margin: 1vw;
            }
          `}
          alt="Lit Fest2"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/litFest/IMG_3.jpeg"
          className={css`
            width: 25.15vw;
            height: auto;
            margin: 10vmin 1vw 20vmin 1vw;
            @media screen and (max-width: 428px) {
              width: 70%;
              margin: 1vw 1vw 20vmin 1vw;
            }
          `}
          alt="Lit Fest2"
        />
      </div>
    </div>
  );
};

export default LetFestComp;
