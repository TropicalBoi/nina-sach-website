import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const ArtMarketComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/artMarket/artmarket_cover1.jpeg"
          className={css`
            width: 53.54vw;
            height: auto;
          `}
          alt="Art Market"
        />
      </div>
      <Caption>
        <h3>Happening Art Market</h3>
        <h3>_2019</h3>
        <h4>Key Visual, Illustration</h4>
      </Caption>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/artMarket/squareartmarket_re.jpg"
          className={css`
            width:  34.16vw;
            height: auto;
            margin: 10vmin 0.5vw;
          `}
          alt="Art Market"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/artMarket/artmarkettemplate.jpeg"
          className={css`
            width: 34.16vw;
            height: auto;
            margin: 10vmin 0.5vw;
          `}
          alt="Art Market"
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
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/artMarket/artmarket_igpost.jpg"
          className={css`
            width:   59.79vw;
            height: auto;
            margin: 10vmin 0 20vmin 0;
          `}
          alt="Art Market"
        />        
      </div>
    </div>
  );
};

export default ArtMarketComp;
