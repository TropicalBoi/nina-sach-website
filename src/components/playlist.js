import * as React from "react";
import { css, keyframes } from "@emotion/css";
import playlist01 from "../images/01highground_playlist.png";
import playlist02 from "../images/02groovy_playlist.png";
import playlist03 from "../images/03sungazing_playlist.png";
import playlist04 from "../images/03sungazing_playlist.png";

const round1 = keyframes`
  0% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const round2 = keyframes`
  0% {
    transform: rotate(1deg);
    opacity: 0
  }
  25% {
    opacity: 0;
  }
  26% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const round3 = keyframes`
  0% {
    transform: rotate(1deg);
    opacity: 0
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const round4 = keyframes`
  0% {
    transform: rotate(1deg);
    opacity: 0
  }
  75% {
    opacity: 0;
  }
  76% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const Playlist = () => {
  return (
    <div
      className={css`
        width: 25.72vw;
        height: 25.72vw;
        background-color: black;
      `}
    >
      <img
        src={playlist01}
        className={css`
          position: absolute;
          top: 0;
          width: 25.72vw;
          height: auto;
          animation: ${round1} 10s linear infinite;
        `}
        alt=""
      />
      <img
        src={playlist02}
        className={css`
          position: absolute;
          top: 0;
          width: 25.72vw;
          height: auto;
          animation: ${round2} 10s linear infinite;
        `}
        alt=""
      />
      <img
        src={playlist03}
        className={css`
          position: absolute;
          top: 0;
          width: 25.72vw;
          height: auto;
          animation: ${round3} 10s linear infinite;
        `}
        alt=""
      />
      <img
        src={playlist04}
        className={css`
          position: absolute;
          top: 0;
          width: 25.72vw;
          height: auto;
          animation: ${round4} 10s linear infinite;
        `}
        alt=""
      />
    </div>
  );
};

export default Playlist;
