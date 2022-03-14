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
          @media screen and (max-width: 428px) {
            flex-direction: column;
            height: 100vh;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_profile.png"
          className={css`
            width: 19.63vw;
            height: auto;
            margin-right: 3vw;
            @media screen and (max-width: 428px) {
              opacity: 0;
            }
          `}
          alt="GC logo"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/GroundControl/GC_profile.png"
          className={css`
            position: absolute;
            width: 50%;
            height: auto;
            margin-right: 3vw;
            opacity: 0;
            @media screen and (max-width: 428px) {
              opacity: 1;
            }
          `}
          alt="GC logo"
        />
        <div
          className={css`
            width: 51.71vw;
            height: fit-content;
            @media screen and (max-width: 428px) {
              opacity: 0;
            }
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
          height: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          opacity: 0;
          @media screen and (max-width: 428px) {
            height: fit-content;
            opacity: 1;
            margin: 10vh 0;
          }
        `}
      >
        <div
          className={css`
            width: 90%;
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
            @media screen and (max-width: 428px) {
              width: 80%;
              margin: 10vh 0;
            }
          `}
          alt="GC logo"
        />
      </div>
      <div
        className={css`
          width: 34.53vw;
          height: fit-content;
          margin: 10vh auto;
          @media screen and (max-width: 428px) {
            width: 80%;
          }
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
          animation: ${moveLeft} 40s linear infinite;
          @media screen and (max-width: 428px) {
            animation: ${moveLeft} 60s linear infinite;
            margin: 10vh 0;
          }
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
          @media screen and (max-width: 428px) {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          className={css`
            width: 20vw;
            height: fit-content;
            @media screen and (max-width: 428px) {
              width: 95%;
            }
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
            @media screen and (max-width: 428px) {
              width: 80%;
              margin: 10vh 0;
            }
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
