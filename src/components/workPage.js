import * as React from "react";
import { css } from "@emotion/css";
import PlaylistAnimate from "./playlistAnimate";
import { Link } from "gatsby";

const WorkPage = () => {
  return (
    <div
      className={css`
        width: 100vw;
        height: fit-content;
        background-color: black;
        margin-top: 5vh;
      `}
    >
      <div className="worksMenu">
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/01_NINA2022.png"
          className={css`
            width: 33.22vw;
            height: auto;
            margin: 10vmin 4.3vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt=""
        />

        <Link className="menuLinkCenter " to="/spacebar">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/02_SPCEBAR.gif"
            className={css`
              width: 34.63vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/resignation">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/03_Resign.png"
            className={css`
              width: 31.1vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/flowerZine">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/04_Flowerzine.jpg"
            className={css`
              width: 48.36vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/culturalDistrict">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/05_CULTURALDISTRICT.jpg"
            className={css`
              width: 43.02vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/playlist">
          <div
            className={css`
              width: 25.72vw;
              height: 25.72vw;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
          >
            <PlaylistAnimate />
          </div>
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter" to="/groundControl">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/07_GC_cov.gif"
            className={css`
              width: 36.875vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/soulFriend">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/08_SOULFRIEND.png"
            className={css`
              width: 40.46vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter" to="/seoul-Illustration-fair">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/09_SIF.png"
            className={css`
              width: 26.56vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/avogarde">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/10_AVOGARDE.jpg"
            className={css`
              width: 42.91vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/bkk-Illustration-fair">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/11_BKKIF.gif"
            className={css`
              width: 50.78vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/12_jaegun.jpg"
          className={css`
            width: 29.94vw;
            height: auto;
            margin: 10vmin 4.3vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt=""
        />
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/litFest">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/13_LIT2020.jpg"
            className={css`
              width: 84.375vw;
              height: auto;
              margin: 10vmin 8.6vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/14_OBJ.gif"
          className={css`
            width: 34.47vw;
            height: auto;
            margin: 10vmin 4.3vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt=""
        />
        <Link className="menuLinkCenter " to="/femme">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/15_Femme.jpg"
            className={css`
              width: 35.31vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/sunrise-sunset">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/16_Sunset.jpg"
            className={css`
              width: 33.02vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/production">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/17_production.jpg"
            className={css`
              width: 33.38vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/hiddenTrack">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/18_HIDDENTRACKSCOVCOV.gif"
            className={css`
              width: 84.37vw;
              height: auto;
              margin: 10vmin 8.6vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/artMarket">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/19_ARTMARKET.gif"
            className={css`
              width: 43.59vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/riso">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/20_RISO.jpg"
            className={css`
              width: 28.38vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/jamMag">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/21_JAM_illus.jpg"
            className={css`
              width: 22.13vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <img
          src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/22_Thesis.gif"
          className={css`
            width: 43.64vw;
            height: auto;
            margin: 10vmin 4.3vw;
            @media screen and (max-width: 428px) {
              width: 80%;
            }
          `}
          alt=""
        />
      </div>
      <div className="worksMenu">
        <Link className="menuLinkCenter " to="/mutual">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/23_Mutual.jpg"
            className={css`
              width: 42.91vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
        <Link className="menuLinkCenter " to="/toxic">
          <img
            src="https://nina-website.s3.ap-southeast-1.amazonaws.com/workPage/24_TOXIC.gif"
            className={css`
              width: 30vw;
              height: auto;
              margin: 10vmin 4.3vw;
              @media screen and (max-width: 428px) {
                width: 80%;
              }
            `}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;
