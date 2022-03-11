import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const ProductionComp = () => {
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
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/production/pre_production.jpg"
          className={css`
            width: 23.4375vw;
            height: auto;
            margin: 2vw;
            @media screen and (max-width: 428px) {
              width: 50%;
            }
          `}
          alt="Pre-Production"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/production/production.jpg"
          className={css`
            width: 23.4375vw;
            height: auto;
            margin: 2vw;
            @media screen and (max-width: 428px) {
              width: 50%;
            }
          `}
          alt="Production"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/production/post_production.jpg"
          className={css`
            width: 23.4375vw;
            height: auto;
            margin: 2vw;
            @media screen and (max-width: 428px) {
              width: 50%;
            }
          `}
          alt="Post-Production"
        />
      </div>
      <Caption>
        <h3>Production Process</h3>
        <h3>_2020</h3>
        <h4>Illustration</h4>
      </Caption>
    </div>
  );
};

export default ProductionComp;
