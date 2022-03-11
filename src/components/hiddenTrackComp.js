import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const HiddenTrackComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/hiddenTrack/hidden-front.jpg"
          className={css`
            width: 31.25vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Front cover"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/hiddenTrack/hidden-back.jpeg"
          className={css`
            width: 31.25vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Back cover"
        />
      </div>

      <Caption>
        <h3>Happening Hidden Tracks</h3>
        <h3>_2019</h3>
        <h4>Magazine Cover</h4>
      </Caption>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/hiddenTrack/hidden-banner.jpeg"
          className={css`
            width: 62.23vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
            @media screen and (max-width: 428px) {
              width: 90%;
            }
          `}
          alt="Hidden track banner"
        />
      </div>
    </div>
  );
};

export default HiddenTrackComp;
