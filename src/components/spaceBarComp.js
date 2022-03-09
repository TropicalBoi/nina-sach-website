import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const move1 = keyframes`
  0% {
    top: 0;
    transform: rotate(-21.5deg);
  }
  25% {
    top: 0;
    transform: rotate(-21.5deg);
  }
  50% {
    top: 18.73vmin;
    transform: rotate(0deg);
  }
  75% {
    top: 18.73vmin;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(-21.5deg);
  }
`;
const move2 = keyframes`
  0% {
    top: 0;
    
  }
  25% {
    top: 0;
    
  }
  50% {
    top: 33.29vmin;
    
  }
  75% {
    top: 33.29vmin;
    
  }
  100% {
    top: 0;
  }
`;

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const SpaceBarComp = () => {
  return (
    <div
      className={css`
        width: auto;
        height: fit-content;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        className={css`
          position: relative;
          width: 100vw;
          height: 100vmin;
          display: inline;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/02_SPCEBAR.gif"
          className={css`
            position: absolute;
            width: 34.63vw;
            height: auto;
            left: 18.8vw;
            top: 29.67vmin;
            margin-right: 6.25vw;
          `}
          alt="space bar"
        />
        <div
          className={css`
            position: absolute;
            width: 17.73vw;
            height: fit-content;
            left: 59.71vw;
            top: 17.84vmin;
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              width: 15.56vw;
              height: auto;
              transform: rotate(-21.5deg);
            `}
            alt="card"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              position: absolute;
              left: 0;
              width: 15.56vw;
              height: auto;
              animation: ${move1} 6s linear infinite;
            `}
            alt="card"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              position: absolute;
              left: 0;
              width: 15.56vw;
              height: auto;
              transform: rotate(-21.5deg);
              animation: ${move2} 6s linear infinite;
            `}
            alt="card"
          />
        </div>
      </div>
      <Caption>
        <h3>SPACEBAR</h3>
        <h3>_2022</h3>
        <h4>Logo, Brand identity</h4>
      </Caption>
      <div
        className={css`
          position: relative;
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          margin-bottom: 21.43vmin;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster3_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster2_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster1_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster4_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
          `}
          alt="poster"
        />
      </div>
      <div
        className={css`
          position: relative;
          width: 57.08vw;
          height: 100vmin;
          margin-bottom: 10vmin;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_card1_re.jpg"
          className={css`
            position: absolute;
            width: 31.51vw;
            height: auto;
            top: 0;
            left: 0;
          `}
          alt="space card"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_card3_re.jpg"
          className={css`
            position: absolute;
            width: 31.51vw;
            height: auto;
            top: 10vmin;
            left: 20%;
          `}
          alt="space card"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_card2_re.jpg"
          className={css`
            position: absolute;
            width: 31.51vw;
            height: auto;
            top: 20vmin;
            left: 40%;
          `}
          alt="space card"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_card4_re.jpg"
          className={css`
            position: absolute;
            width: 31.51vw;
            height: auto;
            top: 30vmin;
            left: 60%;
          `}
          alt="space card"
        />
      </div>
      <div
        className={css`
          position: relative;
          width: 100vw;
          height: 100vmin;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcebar_05.png"
          className={css`
            position: absolute;
            width: 9.16vw;
            height: auto;
            left: 25.93vw;
            top: 5.2vmin;
            animation: ${rotate} 10s linear infinite;
          `}
          alt="element"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcecard_2+copy.png"
          className={css`
            position: absolute;
            width: 19.53vw;
            height: auto;
            left: 20.72vw;
            top: 39.33vmin;
          `}
          alt="element"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_02_re.png"
          className={css`
            position: absolute;
            width: 26.92vw;
            height: auto;
            left: 52.34vw;
            top: 0;
          `}
          alt="element"
        />
      </div>
    </div>
  );
};

export default SpaceBarComp;
