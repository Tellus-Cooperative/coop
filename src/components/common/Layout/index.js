import React from "react";
import Header from "../Header";
import LeftHeader from "../Header/leftHeader";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="w-1/12 border-r border-borderColor">
          <LeftHeader />
        </div>
        <div className="w-10/12 mx-auto">
          <Header />
      {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
