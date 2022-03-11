import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const SunRiseSunSetComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/sunrise_sunset/Sunset.jpg"
          className={css`
            width: 28.75vw;
            height: auto;
            margin: 8.33vw;
            @media screen and (max-width: 428px) {
              width: 70%;
            }
          `}
          alt="Sunset"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/sunrise_sunset/Sunrise.jpg"
          className={css`
            width: 28.75vw;
            height: auto;
            margin: 8.33vw;
            @media screen and (max-width: 428px) {
              width: 70%;
            }
          `}
          alt="Sunrise"
        />
      </div>

      <Caption>
        <h3>Supersonic Mixtape</h3>
        <h3>_2020</h3>
        <h4>Cover Design</h4>
      </Caption>
    </div>
  );
};

export default SunRiseSunSetComp;
