import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const moveLeft = keyframes`
0% {
  background-position: 0;
}

100% {
  background-position: -6205.88px;
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
          alt="GC logo"
        />
        <div
          className={css`
            width: 51.71vw;
            height: fit-content;
          `}
        >
          <video
            className="video-player"
            height="auto"
            width="100%"
            loop
            muted
            autoPlay
            playsInline
            webkit-playsInline
            preload="metadata"
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/gc_fb_cover.mp4"
            type="video/mp4"
          ></video>
        </div>
      </div>
      <Caption>
        <h3>GroundControl</h3>
        <h3>_2020-2021</h3>
        <h4>Graphic Content, Website Design</h4>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/gc_logo.jpg"
          className={css`
            width: 46.51vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
          `}
          alt="GC logo"
        />
      </div>
      <div
        className={css`
          width: 34.53vw;
          height: fit-content;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <video
          className="video-player"
          height="auto"
          width="100%"
          loop
          muted
          autoPlay
          playsInline
          webkit-playsInline
          preload="metadata"
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_discov.mp4"
          type="video/mp4"
        ></video>
      </div>
      <div
        className={css`
          width: 100vw;
          height: 52.02vmin;
          background-image: url("https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/gc_content_cover.jpg");
          background-repeat: repeat;
          animation: ${moveLeft} 20s linear infinite;
          background-size: auto 100%;
          margin: 20vmin 0;
        `}
      ></div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 10vmin 0 20vmin 0;
        `}
      >
        <div
          className={css`
            width: 20vw;
            height: fit-content;
          `}
        >
          <video
            className="video-player"
            height="auto"
            width="100%"
            loop
            muted
            autoPlay
            playsInline
            webkit-playsInline
            preload="metadata"
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_iphone.mp4"
            type="video/mp4"
          ></video>
        </div>
        <div
          className={css`
            width: 43.43vw;
            height: fit-content;
          `}
        >
          <video
            className="video-player"
            height="auto"
            width="100%"
            loop
            muted
            autoPlay
            playsInline
            webkit-playsInline
            preload="metadata"
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_Macbook2.mp4"
            type="video/mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default GCComp;
