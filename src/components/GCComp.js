import * as React from "react";
import { css, keyframes } from "@emotion/css";

const moveLeft = keyframes`
0% {
  background-position: 0;
}

100% {
  background-position: 100%;
}
`;

const GCComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_profile.png"
          className={css`
            width: 19.63vw;
            height: auto;
            margin-right: 3vw;
          `}
        />

        <div
          className={css`
            width: 51.71vw;
            height: 39.22vh;
          `}
        >
          <video
            className="video-player"
            height="auto"
            width="100%"
            loop
            muted
            autoPlay
            playsinline
            webkit-playsinline
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/gc_fb_cover.mp4"
            type="video/mp4"
          ></video>
        </div>
      </div>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/gc_logo.jpg"
          className={css`
            width: 46.51vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
          `}
        />
      </div>
    </div>
  );
};

export default GCComp;
