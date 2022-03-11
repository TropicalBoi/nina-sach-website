import * as React from "react";
import { Link } from "gatsby";
import { css, keyframes } from "@emotion/css";
import asterisk from "../images/Asterisk.png";

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Navbar = () => {
  return (
    <nav
      className={css`
        position: fixed;
        top: 0;
        height: 5vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        z-index: 999;
        margin-top: 1vmin;
      `}
    >
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 60px;
          position: relative;
          margin: 0 0 0 1.5vw;
          color: #ffffff;
          line-height: 20px;
          @media screen and (max-width: 428px) {
            font-size: 40px;
          }
        `}
        to="/works"
      >
        <p>works</p>
      </Link>
      <Link to="/" className={css`
            width: fit-content;
            height: fit-content;
          `}>
        <img
          src={asterisk}
          className={css`
            width: 30px;
            height: auto;
            animation: ${rotate} 8s linear infinite;
            &:hover {
              animation-play-state: paused;
            }
          `}
          alt="home"
        />
      </Link>
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 60px;
          position: relative;
          margin: 0 1.5vw 0 0;
          color: #ffffff;
          line-height: 20px;
          @media screen and (max-width: 428px) {
            font-size: 40px;
          }
        `}
        to="/about"
      >
        <p>about</p>
      </Link>
    </nav>
  );
};

export default Navbar;
