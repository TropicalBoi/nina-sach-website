import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption"

const showUp = keyframes`
49% {
  opacity: 0
}
50% {
  opacity: 1
}
100% {
  opacity: 1
}
`;

const FlowerZineComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_cover_re.jpg"
          className={css`
            width: 55.41vw;
            height: auto;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/smol2.jpg"
          className={css`
            position: absolute;
            width: 8.43vw;
            height: auto;
            left: 57.29vw;
            top: 40.79vmin;
            animation: ${showUp} 2s linear 1s;
            animation-fill-mode: forwards;
            opacity: 0;
          `}
        />
      </div>
      <Caption>
        <h3>Flowers of Nowhere</h3>
        <h3>_2022</h3>
        <h4>Illustration Zine</h4>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_1_re.jpg"
          className={css`
            width: 45.1vw;
            height: auto;
            margin: 20vmin 8.125vw 0 0;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_2_re.jpg"
          className={css`
            width: 31.51vw;
            height: auto;
            margin: 20vmin 0 0 0;
          `}
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/smol3.jpg"
          className={css`
            position: absolute;
            width: 6.14vw;
            height: auto;
            margin-left: 14vw;
            margin-top: 10vmin;
            transform: rotate(-8.06deg);
          `}
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 20vmin;
        `}
      >
        <div
          className={css`
            width: 31.51vw;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-start;
            margin: auto;
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/smol1.jpg"
            className={css`
              position: absolute;
              width: 6.14vw;
              height: auto;
              transform: rotate(9.12deg);
            `}
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_3_re.jpg"
            className={css`
              width: 100%;
              height: auto;
            `}
          />
        </div>
        <div
          className={css`
            width: 45.1vw;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;
            margin: 0 auto;
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_4_re.jpg"
            className={css`
              width: 100%;
              height: auto;
            `}
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/smol4.jpg"
            className={css`
              position: absolute;
              width: 6.14vw;
              height: auto;
              margin-left: -10vw;
              transform: rotate(-13.26deg);
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerZineComp;
