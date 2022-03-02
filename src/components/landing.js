import * as React from "react";
import { css, injectGlobal, keyframes } from "@emotion/css";
import LandingImages from "./landingImages";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

const logoMove1 = keyframes`
  0% {
    bottom: 0;
  }
  50% {
    bottom: 0;
  }
  100% {
    bottom: 200%;
  }
`;

const logoMove2 = keyframes`
0% {
  bottom: -40%;
  opacity: 1;
}
50% {
  bottom: -20%;
  opacity: 1;
}
100% {
  bottom: 1%;
  opacity: 1;
}
`;

const showUp = keyframes`
0% {
  visibility: visible;
}
`;

const showUpO = keyframes`
0% {
  visibility: visible;
  opacity: 0;
}
20% {
  opacity: 1;
}
`;

const showUpR = keyframes`
0% {
  visibility: visible;
  transform: rotate(180deg);
}
100% {
  transform: rotate(360deg);
}
`;

const slideRL = keyframes`
0% {
  visibility: visible;
  right: 0;
}
100% {
  right: 10%;
}
`;

const Landing = () => {
  return (
    <div
      className={css`
        height: 100vh;
        width: 100vw;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        z-index: 300;
      `}
    >      
      <div
        className={css`
          width: 100vw;
          height: 100%;
        `}
      >
        <div
          className={css`
            animation: ${logoMove1} 4s ease-in-out;
            animation-fill-mode: forwards;
            width: 100vw;
            height: 100%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            src={LandingImages.NNA}
            className={css`
              position: relative;
              height: auto;
              width: 100%;
            `}
            alt="NINA"
          />
        </div>
        <img
          src={LandingImages.SCH}
          className={css`
            animation: ${logoMove2} 1s ease-out 3s;
            animation-fill-mode: forwards;
            opacity: 0;
            position: absolute;
            height: auto;
            width: 96%;
            margin: 0 2vw;
            z-index: 100;
          `}
          alt="SACH"
        />
        <div>
          <img
            src={LandingImages.resig1}
            className={css`
              animation: ${showUp} 5s linear 5s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              height: auto;
              width: 38.5vw;
              left: 11.8vw;
              top: 18.3vh;
            `}
            alt="RESIG1"
          />
          <img
            src={LandingImages.resig2}
            className={css`
              animation: ${showUp} 4500ms linear 5500ms;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              height: auto;
              width: 38.5vw;
              left: 35.8vw;
              top: 30.6vh;
              transform: rotate(-8.44deg);
            `}
            alt="RESIG2"
          />
          <div
            className={css`
              animation: ${showUp} 4s linear 6s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 14.11vw;
              width: 14.11vw;
              left: 72.2vw;
              top: 45.5vh;
              border-radius: 200px;
              background: #c4c4c4;
            `}
          >
            <img
              src={LandingImages.resigTxt2}
              className={css`
                animation: ${showUp} 4s linear 6s;
                animation-fill-mode: forwards;
                visibility: hidden;
                position: absolute;
                height: auto;
                width: 100%;
              `}
              alt="RESIG2"
            />
            <img
              src={LandingImages.resigTxt1}
              className={css`
                animation: ${showUpR} 4s linear 6s;
                animation-fill-mode: forwards;
                visibility: hidden;
                position: relative;
                height: auto;
                width: 100%;
              `}
              alt="RESIG2"
            />
          </div>
          <img
            src={LandingImages.stardust}
            className={css`
              animation: ${slideRL} 5s linear 11s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              height: auto;
              width: 100vw;
              bottom: -100vh;
              z-index: 1;
            `}
            alt="stardust"
          />
          <img
            src={LandingImages.stardustArc}
            className={css`
              animation: ${showUp} 5s linear 11s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              height: 100vh;
              width: 100vw;
              left: 0;
              top: 0;
              z-index: 2;
            `}
            alt="stardust"
          />
          <div
            className={css`
              animation: ${showUp} 1s linear 11s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 20.9vw;
              height: 100%;
              left: 39.7vw;
              top: 16.2vh;
              background: #000000;
              z-index: 3;
            `}
          ></div>
          <div
            className={css`
              animation: ${showUp} 2s linear 11s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 20.9vw;
              height: 100%;
              left: 16.6vw;
              top: 16.2vh;
              background: #000000;
              z-index: 3;
            `}
          ></div>
          <img
            src={LandingImages.femme1}
            className={css`
              animation: ${showUpO} 5s linear 17s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 35.3vw;
              height: auto;
              left: 19.8vw;
              top: 18.4vh;
            `}
            alt="femme1"
          />
          <img
            src={LandingImages.femme2}
            className={css`
              animation: ${showUpO} 4500ms linear 17500ms;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 21vw;
              height: auto;
              left: 59vw;
              top: 10.4vh;
            `}
            alt="femme2"
          />
          <img
            src={LandingImages.obj1}
            className={css`
              animation: ${showUpO} 4500ms linear 23500ms;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 19.79vw;
              height: auto;
              left: 15.57vw;
              top: 15.41vh;
            `}
            alt="obj1"
          />
          <img
            src={LandingImages.obj2}
            className={css`
              animation: ${showUpO} 5s linear 23s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 14.53vw;
              height: auto;
              left: 44.63vw;
              top: 23.65vh;
            `}
            alt="obj2"
          />
          <img
            src={LandingImages.obj3}
            className={css`
              animation: ${showUpO} 4s linear 24s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 20.31vw;
              height: auto;
              left: 68.43vw;
              top: 15.41vh;
            `}
            alt="obj3"
          />
          <img
            src={LandingImages.spcbrR}
            className={css`
              animation: ${showUpR} 11s linear 29s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 9.16vw;
              height: 9.16vw;
              left: 25.83vw;
              top: 12.14vh;
            `}
            alt="spcbrR"
          />
          <img
            src={LandingImages.spcbrCard}
            className={css`
              animation: ${showUpO} 8500ms linear 31500ms;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 17.23vw;
              height: auto;
              left: 60.10vw;
              top: 46.46vh;
              z-index: 5;
            `}
            alt="spcbrCard2"
          />
          <img
            src={LandingImages.spcbrAst}
            className={css`
              animation: ${showUpO} 10s linear 30s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 14.21vw;
              height: auto;
              left: 63.43vw;
              top: 11.29vh;
            `}
            alt="spcbrAst"
          />
          <img
            src={LandingImages.spcbrSig}
            className={css`
              animation: ${showUpO} 9500ms linear 30500ms;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 13.07vw;
              height: auto;
              left: 22.34vw;
              top:  35.48vh;
            `}
            alt="spcbrSig"
          />
          <img
            src={LandingImages.spcbr4}
            className={css`
              animation: ${showUp} 9s linear 33s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 22.39vw;
              height: auto;
              left: 38.22vw;
              top: 11.29vh;
              z-index: 1;
            `}
            alt="spcbr4"
          />
          <img
            src={LandingImages.spcbr2}
            className={css`
              animation: ${showUp} 8s linear 34s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 22.39vw;
              height: auto;
              left: 38.22vw;
              top: 11.29vh;
              z-index: 2;
            `}
            alt="spcbr2"
          />
          <img
            src={LandingImages.spcbr3}
            className={css`
              animation: ${showUp} 7s linear 35s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 22.39vw;
              height: auto;
              left: 38.22vw;
              top: 11.29vh;
              z-index: 3;
            `}
            alt="spcbr3"
          />
          <img
            src={LandingImages.spcbr1}
            className={css`
              animation: ${showUp} 6s linear 36s;
              animation-fill-mode: forwards;
              visibility: hidden;
              position: absolute;
              width: 22.39vw;
              height: auto;
              left: 38.22vw;
              top: 11.29vh;
              z-index: 4;
            `}
            alt="spcbr1"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
