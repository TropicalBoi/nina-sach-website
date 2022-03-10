import * as React from "react";
import { css } from "@emotion/css";
import Navbar from "../components/navbar";
import NameCard from "../components/aboutComp";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NINASACH - /\///\//\ *</title>
      </Helmet>
      <Navbar />
      <NameCard />
    </>
  );
};

export default About;
