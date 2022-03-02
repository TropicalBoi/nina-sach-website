import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div
        className={css`
          position: absolute;
          width: 100vw;
          height: 100vh;
          background-color: black;
          z-index: 100;
        `}
      ></div>
    </Layout>
  );
};

export default About;
