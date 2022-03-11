import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const ToxicComp = () => {
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
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/24_TOXIC.gif"
          className={css`
            width: 36.45vw;
            height: auto;
            margin: 2vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Toxic"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/Toxic/tox_mock.jpeg"
          className={css`
            width: 28.69vw;
            height: auto;
            margin: 2vw;
            @media screen and (max-width: 428px) {
              width: 70%;
            }
          `}
          alt="Toxic zine"
        />
      </div>

      <Caption>
        <h3>Toxic</h3>
        <h3>_2019</h3>
        <h4>Illustration Zine</h4>
      </Caption>
    </div>
  );
};

export default ToxicComp;
