import * as React from "react";
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import { Helmet } from "react-helmet";
import { css } from "@emotion/css";

const IndexPage = () => {
  return (
    <div
      className={css`
        overflow: hidden;
        width: 100vw;
        height: 100vh;
      `}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>NINASACH - /\///\//\ *</title>
      </Helmet>
      <Navbar />
      <Landing />
    </div>
  );
};

export default IndexPage;
