import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const JamMagComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/jamMag/thejam_mag.jpg"
          className={css`
            width:  33.75vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="the jam mag"
        />
      </div>

      <Caption>
        <h3>Windmills of your mind</h3>
        <h3>_2019</h3>
        <h4>Riso prints</h4>
      </Caption>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/jamMag/jam_illus.jpeg"
          className={css`
            width: 31.25vw;
            height: auto;
            margin: 0 0 20vmin 0;
            @media screen and (max-width: 428px) {
              width: 55%;
            }
          `}
          alt="the jam mag"
        />
      </div>
    </div>
  );
};

export default JamMagComp;
