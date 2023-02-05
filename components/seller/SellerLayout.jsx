import React from "react";
import ProfileNav from "./ProfileNav";

const SellerLayout = ({ children }) => {
  return (
    // <div className='container flex flex-col lg:flex-row xl:justify-center bg-white lg:bg-[#F6F6F6]'>
    <div className="container flex flex-col lg:flex-row bg-white lg:bg-[#F6F6F6]">
      <ProfileNav />
      {children}
    </div>
  );
};

export default SellerLayout;
