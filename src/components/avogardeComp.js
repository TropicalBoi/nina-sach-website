import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const AvogardeComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/avogarde/AVOGARDE_LOGO.jpg"
          className={css`
            width: 29.06vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width:  80%;
            }
          `}
          alt="Avogarde"
        />
      </div>
      <Caption>
        <h3>AVOGARDE</h3>
        <h3>_2020</h3>
        <h4>Logo, Poster Design</h4>
      </Caption>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 10vmin 0 20vmin 0;
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/avogarde/AVOGARDE_COVERFB.jpg"
          className={css`
            width:  46.66vw;
            height: auto;
            margin-right: 6.25vw;
            @media screen and (max-width: 428px) {
              width:  80%;
              margin: 5vw 0;
            }
          `}
          alt="Avogarde"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/avogarde/AVOGARDE-Poster.jpg"
          className={css`
            width: 30.10vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width:  80%;
            }
          `}
          alt="Avogarde"
        />
      </div>
    </div>
  );
};

export default AvogardeComp;
