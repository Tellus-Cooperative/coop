import React from "react";
import Header from "../Header";
import LeftHeader from "../Header/leftHeader";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[5%] border-r border-borderColor">
          <LeftHeader />
        </div>
        <div className="w-full mx-auto">
          <div className="w-full border-b border-borderColor">
            <div className="w-10/12 mx-auto">
              <Header />
            </div>
          </div>

          <div className="w-10/12 mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
