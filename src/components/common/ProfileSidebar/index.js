import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <section id="bounties">
        <div className="border-mygrey border-2 rounded-2xl py-10 w-full">
          <div className="flex justify-center">
            <div className="content">
              <img src="/bountylogo.png" alt="" />
              <h1 className="text-xl text-black font-bold">Bounty Hunter</h1>
              <span>1 Active Boutny</span>
            </div>
          </div>
          <div className="menu">
            <ul className="mt-10 pb-3 pl-5 font-bold">
              <li className="pb-2">Proposal</li>
              <Link to="/newproposal">
              <li className="pb-2"> New Proposal</li>
              </Link>

            
              <li className="pb-2">Bounties</li>
              <li className="pb-2">About</li>
              <li className="pb-2">Settings</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSideBar;
