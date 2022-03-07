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
        align-items: flex-end;
        justify-content: space-between;
        z-index: 999;
      `}
    >
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 38px;
          position: relative;
          margin: 0 0 0 1.5vw;
          color: #ffffff;
        `}
        to="/works"
      >
        <p>WORKS</p>
      </Link>
      <Link to="/">
        <img
          src={asterisk}
          className={css`
            width: 1.8vw;
            height: auto;
            animation: ${rotate} 8s linear infinite;
            &:hover {
              animation-play-state: paused;
            }
          `}
        />
      </Link>
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 38px;
          position: relative;
          margin: 0 1.5vw 0 0;
          color: #ffffff;
        `}
        to="/about"
      >
        <p>ABOUT</p>
      </Link>
    </nav>
  );
};

export default Navbar;
