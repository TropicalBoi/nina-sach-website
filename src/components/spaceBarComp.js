import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const move1 = keyframes`
  0% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
  25% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
  50% {
    margin-top: 18.73vmin;
    transform: rotate(0deg);
  }
  75% {
    margin-top: 18.73vmin;
    transform: rotate(0deg);
  }
  100% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
`;
const move2 = keyframes`
  0% {
    margin-top: 0;
    
  }
  25% {
    margin-top: 0;
    
  }
  50% {
    margin-top: 35vmin;
    
  }
  75% {
    margin-top: 35vmin;
    
  }
  100% {
    margin-top: 0;
  }
`;

const move1mobile = keyframes`
  0% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
  25% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
  50% {
    margin-top: 15vh;
    transform: rotate(0deg);
  }
  75% {
    margin-top: 15vh;
    transform: rotate(0deg);
  }
  100% {
    margin-top: 0;
    transform: rotate(-21.5deg);
  }
`;
const move2mobile = keyframes`
  0% {
    margin-top: 0;
    
  }
  25% {
    margin-top: 0;
    
  }
  50% {
    margin-top: 30vh;
    
  }
  75% {
    margin-top: 30vh;
    
  }
  100% {
    margin-top: 0;
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

const fadeUp1 = keyframes`
0% {
  opacity: 0
}

25% {
  opacity: 0
}

26% {
  opacity: 1
}

99% {
  opacity: 1
}

100% {
  opacity: 0
}
`;

const fadeUp2 = keyframes`
0% {
  opacity: 0
}

50% {
  opacity: 0
}

51% {
  opacity: 1
}

99% {
  opacity: 1
}

100% {
  opacity: 0
}
`;
const fadeUp3 = keyframes`
0% {
  opacity: 0
}

75% {
  opacity: 0
}

76% {
  opacity: 1
}

99% {
  opacity: 1
}

100% {
  opacity: 0
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/02_SPCEBAR.gif"
          className={css`
            width: 34.63vw;
            height: auto;
            margin: 5vh 6.25vw;
            @media screen and (max-width: 428px) {
              width: 90%;
            }
          `}
          alt="space bar"
        />
        <div
          className={css`
            width: 17.73vw;
            height: 50vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 428px) {
              width: 50%;
            }
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              position: absolute;
              width: 17.73vw;
              height: auto;
              transform: rotate(-21.5deg);
              @media screen and (max-width: 428px) {
                width: 50%;
              }
            `}
            alt="card"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              position: absolute;
              width: 17.73vw;
              height: auto;
              transform: rotate(-21.5deg);
              animation: ${move1} 6s linear infinite;
              @media screen and (max-width: 428px) {
                width: 50%;
                animation: ${move1mobile} 6s linear infinite;
              }
            `}
            alt="card"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr-07.jpg"
            className={css`
              position: absolute;
              width: 17.73vw;
              height: auto;
              transform: rotate(-21.5deg);
              animation: ${move2} 6s linear infinite;
              @media screen and (max-width: 428px) {
                width: 50%;
                animation: ${move2mobile} 6s linear infinite;
              }
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
          align-items: center;
          margin-bottom: 21.43vmin;
        `}
      >
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster3_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
            @media screen and (max-width: 428px) {
              width: 70%;
              z-index: 1;
            }
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster2_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
            animation: ${fadeUp1} 10s linear infinite;
            @media screen and (max-width: 428px) {
              position: absolute;
              width: 70%;
              z-index: 2;
            }
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster4_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
            animation: ${fadeUp2} 10s linear infinite;
            @media screen and (max-width: 428px) {
              position: absolute;
              width: 70%;
              z-index: 3;
            }
          `}
          alt="poster"
        />
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_poster1_re.png"
          className={css`
            height: auto;
            width: 20.05vw;
            animation: ${fadeUp3} 10s linear infinite;
            @media screen and (max-width: 428px) {
              position: absolute;
              width: 70%;
              z-index: 4;
            }
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
            animation: ${fadeUp1} 10s linear infinite;
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
            animation: ${fadeUp2} 10s linear infinite;
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
            animation: ${fadeUp3} 10s linear infinite;
          `}
          alt="space card"
        />
      </div>
      <div
        className={css`
          position: relative;
          width: 100vw;
          height: fit-content;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          margin: 0 0 10vmin 0;
          @media screen and (max-width: 428px) {
            flex-direction: column;
          }
        `}
      >
        <div
          className={css`
            position: relative;
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcebar_05.png"
            className={css`
              width: 9.16vw;
              height: auto;              
              animation: ${rotate} 10s linear infinite;
              @media screen and (max-width: 428px) {
                width: 40%;
              }
            `}
            alt="element"
          />
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcecard_2+copy.png"
            className={css`
              width: 19.53vw;
              height: auto;
              margin: 8vmin 0;
              @media screen and (max-width: 428px) {
                width: 60%;
              }
            `}
            alt="element"
          />
        </div>
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/spacebar/spcbr_02_re.png"
          className={css`
            width: 26.92vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 70%;
            }
          `}
          alt="element"
        />
      </div>
    </div>
  );
};

export default SpaceBarComp;
