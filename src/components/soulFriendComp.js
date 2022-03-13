import * as React from "react";
import { css } from "@emotion/css";
import Caption from "./caption";

const SoulFriendComp = () => {
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
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/08_SOULFRIEND.png"
          className={css`
            width: 74.68vw;
            height: auto;
            @media screen and (max-width: 428px) {
              width: 95%
            }
          `}
          alt="Star Dust"
        />
      </div>
      <Caption>
        <h3>Soulfriend & Spiritual Garden</h3>
        <h3>_2021</h3>
        <h4>Logo, Type Design</h4>
      </Caption>
    </div>
  );
};

export default SoulFriendComp;
