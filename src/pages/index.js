import * as React from "react";
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <div>
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
