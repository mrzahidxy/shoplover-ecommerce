import React, { Children } from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const WebLayout = ({children}) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default WebLayout;
