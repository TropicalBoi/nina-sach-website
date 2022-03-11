import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const RisoComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/riso/windmills.jpeg"
          className={css`
            width:  44.11vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Windmills of your mind"
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/riso/blue1.jpeg"
          className={css`
            width: 62.23vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
            @media screen and (max-width: 428px) {
              width: 70%;
              margin: 10vmin 0 1vmin 0;
            }
          `}
          alt="blue"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/riso/black2.jpeg"
          className={css`
            width: 31.25vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
            @media screen and (max-width: 428px) {
              width: 70%;
              margin: 1vmin 0 20vmin 0;
            }
          `}
          alt="black"
        />
      </div>
    </div>
  );
};

export default RisoComp;
