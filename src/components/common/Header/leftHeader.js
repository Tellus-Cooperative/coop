import React from "react";
import { Link } from "react-router-dom";

const LeftHeader = () => {
  return (
    <section id="leftheader" className="w-full">
      <div className="px-3 ">
        <div className="py-4 flex flex-col items-center">
          <div className="mt-5">
            <Link to="/">
              <img src="/leftbarlogo.png" alt="" />
            </Link>
          </div>

          <Link to="/">
            <div className="mt-7">
              <img src="pencil.png" alt="" />
            </div>
          </Link>

          <Link to="/allbounties">
            <div className="mt-7">
              <img src="helmet.png" alt="" />
            </div>
          </Link>

          <div className="mt-7">
            <img src="hat.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftHeader;
