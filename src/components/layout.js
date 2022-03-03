import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NINASACH - /\///\//\ *</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}