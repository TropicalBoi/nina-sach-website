import * as React from "react";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { css, keyframes } from "@emotion/css";
import Caption from "./caption";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const NameCard = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys });

  return (
    <div
      className={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: #000;
        overflow: hidden;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
        ref={ref}
      >
        <animated.div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70ch;
            height: fit-content;
            transition: box-shadow 0.5s;
            will-change: transform;
            background: linear-gradient(-45deg, #D827BD, #90B49B, #A385D6, #AFAFAF);
            background-size: 400% 400%;
            animation: ${gradient} 15s ease infinite;
            @media screen and (max-width: 428px) {
              width: 30ch;
            }
          `}
          style={{ transform: props.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={(e) => {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
        >
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/about/namecard_nina_sach.png"
            className={css`
              height: auto;
              width: 100%;
            `}
            alt="Name card"
          />
        </animated.div>
      </div>
      <Caption>
        <h4>Design by Nina Sach</h4>
        <h4>Coded by Tropical Tech Tribe</h4>
      </Caption>
    </div>
  );
};

export default NameCard;
