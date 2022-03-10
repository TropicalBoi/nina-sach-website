import * as React from "react";
import { useState, useEffect, StrictMode } from "react";
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import Loading from "../components/loading";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    loadFiveSeconds();
  }, []);

  return (
    <div className="indexPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NINASACH - /\///\//\ *</title>
      </Helmet>
      {loading ? (
        <StrictMode>
          <Loading />
        </StrictMode>
      ) : (
        <>
          <Navbar />
          <Landing />
        </>
      )}
    </div>
  );
};

export default IndexPage;
