import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";

const Navbar = () => {
  return (
    <nav
      className={css`
        position: absolute;
        top: 0;
        height: 5vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        z-index: 999;
      `}
    >
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 2.6vw;
          position: relative;
          margin: 0 0 0 1.5vw;
          color: #ffffff;
        `}
        to="/works"
      >
        <p>WORKS</p>
      </Link>
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 5vw;
          position: relative;
          color: #ffffff;
        `}
        to="/"
      >
        <p>*</p>
      </Link>
      <Link
        className={css`
          font-family: RuneScape-Quill-Caps;
          font-size: 2.6vw;
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
