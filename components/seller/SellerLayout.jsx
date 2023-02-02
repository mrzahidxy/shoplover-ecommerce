import React from "react";

const SellerLayout = ({ children }) => {
  console.log("This is seller layout");

  return (
    <div>
      <span>Hello Seller</span>
      {children}
    </div>
  );
};

export default SellerLayout;
