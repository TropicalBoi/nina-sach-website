import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const moveRight = keyframes`
0% {
  background-position: 0;
}

100% {
  background-position: 100%;
}
`;

const moveLeft = keyframes`
0% {
  background-position: 100%;
}

100% {
  background-position: 0;
}
`;

const fadeUp1 = keyframes`
0% {
  opacity: 0
}

33% {
  opacity: 0
}

34% {
  opacity: 1
}

100% {
  opacity: 1
}
`;

const fadeUp2 = keyframes`
0% {
  opacity: 0
}

66% {
  opacity: 0
}

67% {
  opacity: 1
}

100% {
  opacity: 1
}
`;

const CulturalDistrictComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CULTURAL_DISTRICT_stroke.png"
          className={css`
            width: 60.67vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 95%;
            }
          `}
          alt="Cultural District"
        />
      </div>
      <Caption>
        <h3>CULTURAL DISTRICT</h3>
        <h3>_2021</h3>
        <h4>Logo, Key Visual</h4>
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
        <div
          className={css`
            width: 31.97vw;
            height: fit-content;
            margin: 5vw;
            @media screen and (max-width: 428px) {
              width: 80%;
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
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CulturalDistrict_profile.mp4"
            type="video/mp4"
          ></video>
        </div>
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CULTURAL_DISTRICT_BWlogo.png"
          className={css`
            width: 12.86vw;
            height: auto;
            margin: 5vw;
            @media screen and (max-width: 428px) {
              width: 60%;
            }
          `}
          alt="Cultural District"
        />
      </div>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CULTURAL_DISTRICT_element.png"
          className={css`
            width: 79.84vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 95%;
            }
          `}
          alt="Cultural District"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: 35vmin;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div
          className={css`
            width: 100vw;
            height: 11.23vmin;
            margin-top: 30px;
            background-image: url("https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CULTURAL_DISTRICT_text.png");
            background-repeat: repeat;
            animation: ${moveRight} 15s linear infinite;
            background-size: auto 100%;
          `}
        ></div>
        <div
          className={css`
            width: 100vw;
            height: 11.23vmin;
            background-image: url("https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/CULTURAL_DISTRICT_text.png");
            background-repeat: repeat;
            animation: ${moveLeft} 15s linear infinite;
            background-size: auto 100%;
          `}
        ></div>
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/logo-usage.jpg"
          className={css`
            width: 62.03vw;
            height: auto;
            margin-top: 20vmin;
            @media screen and (max-width: 428px) {
              width: 100%;
            }
          `}
          alt="Cultural District"
        />
      </div>
      <div
        className={css`
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: flex-start;
          @media screen and (max-width: 428px) {
            justify-content: center;
            height: 80vh;
          }
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/cd_poster1.jpg"
          className={css`
            width: 26.04vw;
            height: auto;
            margin-top: 20vmin;
            @media screen and (max-width: 428px) {
              position: absolute;
              width: 90%;
              z-index: 1;
            }
          `}
          alt="Cultural District"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/cd-poster2.jpg"
          className={css`
            width: 26.04vw;
            height: auto;
            margin-top: 20vmin;
            @media screen and (max-width: 428px) {
              opacity: 0;
              position: absolute;
              width: 90%;
              z-index: 2;
              animation: ${fadeUp1} 10s linear infinite;
            }
          `}
          alt="Cultural District"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/cd-poster3.jpg"
          className={css`
            width: 26.04vw;
            height: auto;
            margin-top: 20vmin;
            @media screen and (qmax-width: 428px) {
              opacity: 0;
              position: absolute;
              width: 90%;
              z-index: 3;
              animation: ${fadeUp2} 10s linear infinite;
            }
          `}
          alt="Cultural District"
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/iphone_cult1.png"
          className={css`
            width: 23.85vw;
            height: auto;
            margin: 20vmin 2vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Cultural District"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/culturalDistrict/iphone_cult2.png"
          className={css`
            width: 23.85vw;
            height: auto;
            margin: 20vmin 2vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt="Cultural District"
        />
      </div>
    </div>
  );
};

export default CulturalDistrictComp;
