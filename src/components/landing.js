import * as React from "react";
import { css, keyframes } from "@emotion/css";
import LandingVid from "../images/NinaLanding.mp4";

const logoMove1 = keyframes`
  0% {
    bottom: 0;
  }
  50% {
    bottom: 0;
  }
  100% {
    bottom: 200vh;
  }
`;

const logoMove2 = keyframes`
0% {
  bottom: -40vh;
  opacity: 1;
}
50% {
  bottom: -20vh;
  opacity: 1;
}
100% {
  bottom: 1vh;
  opacity: 1;
}
`;

const Landing = () => {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      `}
    >
      <div
        className={css`
          animation: ${logoMove1} 4s ease-in-out;
          animation-fill-mode: forwards;
          width: 100vw;
          height: 100vh;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/about/ninaLogo_1.png"
          className={css`
            position: relative;
            height: auto;
            width: 100%;
            z-index: 100;
          `}
          alt="NINA"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          position: absolute;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/about/ninaLogo_2.png"
          className={css`
            animation: ${logoMove2} 1s ease-out 3s;
            animation-fill-mode: forwards;
            opacity: 0;
            position: relative;
            width: 96%;
            margin: 0 2vw;
            z-index: 100;
          `}
          alt="SACH"
        />
      </div>

      <div
        className={css`
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          @media screen and (max-width: 428px) {
            visibility: hidden;
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
          src={LandingVid}
          type="video/mp4"
        ></video>
      </div>
      <div
        className={css`
          position: absolute;
          top: 0;
          width: 0;
          height: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          @media screen and (max-width: 428px) {
            visibility: visible;
            width: 100vw;
            height: 100vh;
          }
        `}
      >
        <video
          className="video-player"
          height="auto"
          width="70%"
          loop
          muted
          autoPlay
          playsInline
          webkit-playsInline
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/about/nina_mobile_landing.mp4"
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};

export default Landing;
