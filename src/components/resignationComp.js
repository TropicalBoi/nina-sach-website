import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  33%{
    opacity: 0;
  }
  66%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`
const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const ResignComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/RESIGN_1.jpg"
          className={css`
            width: 52.65vw;
            height: auto;
          `}
        />
      </div>
      <Caption>
        <h3>Resignation or Revolution</h3>
        <h3>_2022</h3>
        <h4>Poster, Experimental Typography</h4>
      </Caption>
      <div
        className={css`
          position: fixed;
          top: 37.46vmin;
          left: 81.45vw;
          width: 11.4vw;
          height: 11.4vw;
          background-color: #C4C4C4;
          border-radius: 100%;
          overflow: hidden;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/txt02.png"
          className={css`
            position: absolute;
            width: 100%;
            height: auto;
            animation: ${rotate} 10s linear infinite;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/txt03.png"
          className={css`
            position: absolute;
            width: 100%;
            height: auto;
          `}
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <div
          className={css`
            width: fit-content;
            height: fit-content;
            margin-top: 20vmin;
            background-image: url("https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/RESIGN3_w.jpg");
            background-size: auto 100%;
            overflow: hidden;
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/RESIGN3_b.jpg"
            className={css`
              width: 58.64vw;
              height: auto;
              animation: ${fadeIn} 5s linear infinite alternate;
            `}
          />
        </div>
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/resignation/RESIGN_2.jpg"
          className={css`
            width: 64.94vw;
            height: auto;
            margin: 5vmin 0 20vmin 0;
          `}
        />
      </div>
    </div>
  );
};

export default ResignComp;
