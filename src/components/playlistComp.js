import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";
import PlaylistAnimate from "./playlistAnimate";
import playlist01 from "../images/01highground_playlist.png";
import playlist02 from "../images/02groovy_playlist.png";
import playlist03 from "../images/03sungazing_playlist.png";
import playlist04 from "../images/04thoughts_playlist.png";

const PlaylistComp = () => {
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
        <PlaylistAnimate />
      </div>

      <Caption>
        <h3>PLAYLIST</h3>
        <h3>_2022</h3>
        <h4>Cover Design</h4>
      </Caption>
      <div
        className={css`
          width: 100vw;
          height: 70vh;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 10vmin 0 10vmin 0;
          @media screen and (max-width: 428px) {
            flex-direction: column;
            margin: 10vmin 0 20vmin 0;
          }
        `}
      >
        <img
          src={playlist01}
          className={css`
            position: absolute;
            width: 25vw;
            height: auto;
            padding: 20vmin 0 0 10vw;
            z-index: 3;
            @media screen and (max-width: 428px) {
              width: 50vw;
              padding: 0 20vw 0 0;
              z-index: 1;
            }
          `}
          alt=""
        />
        <img
          src={playlist02}
          className={css`
            position: absolute;
            width: 25vw;
            height: auto;
            padding: 0 0 20vmin 28vw;
            z-index: 2;
            @media screen and (max-width: 428px) {
              width: 50vw;
              padding: 35vw 0 0 20vw;
            }
          `}
          alt=""
        />
        <img
          src={playlist04}
          className={css`
            position: absolute;
            width: 25vw;
            height: auto;
            padding: 20vmin 0 0 46vw;
            z-index: 1;
            @media screen and (max-width: 428px) {
              width: 50vw;
              padding: 70vw 20vw 0 0;
              z-index: 3;
            }
          `}
          alt=""
        />
        <img
          src={playlist03}
          className={css`
            position: absolute;
            width: 25vw;
            height: auto;
            padding: 0 0 20vmin 64vw;
            z-index: 2;
            @media screen and (max-width: 428px) {
              width: 50vw;
              padding: 105vw 0 0 20vw;
            }
          `}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlaylistComp;
