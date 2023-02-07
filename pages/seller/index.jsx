import React from "react";

import Dashboard from "./dashboard";

const Seller = ({ Component, pageProps }) => {
  return (
    <>
      <Dashboard />
    </>
  );
};

Seller.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default Seller;
