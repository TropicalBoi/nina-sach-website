import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

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
          height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            width: 25.57vw;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            margin: 0;
            @media screen and (max-width: 428px) {
              width: 70%;
            }
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_cover.png"
            className={css`
              width: 100%;
              height: auto;
            `}
            alt="Flower Zine"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/smol2.jpg"
            className={css`
              position: absolute;
              width: 8.43vw;
              height: auto;
              animation: ${showUp} 2s linear 1s;
              animation-fill-mode: forwards;
              opacity: 0;
              margin-left: 3vw;
              @media screen and (max-width: 428px) {
                width: 20%;
                margin-left: 8vw;
              }
            `}
            alt="Flower Zine"
          />
        </div>
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
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_1.jpg"
          className={css`
            width: 41.66vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="blue"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_2.png"
          className={css`
            width: 39.06vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 65%;
            }
          `}
          alt="black"
        />
      </div>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_3.png"
          className={css`
            width: 39.06vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 75%;
            }
          `}
          alt="black"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/FlowerZine/flozine_4.png"
          className={css`
            width: 41.66vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="blue"
        />
      </div>
    </div>
  );
};

export default FlowerZineComp;
