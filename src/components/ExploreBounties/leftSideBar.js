import React from "react";

const LeftSideBar = () => {
  return (
    <>
      <section id="bounties">
        <div className="border-mygrey border-2 rounded-lg py-10 w-9/12">
          <div className="flex justify-center">
            <div className="content">
              <img src="/bountylogo.png" alt="" />
              <h1 className="text-xl text-black font-bold">Bounty Hunter</h1>
              <span>1 Active Boutny</span>
            </div>
          </div>
          <div className="menu">
            <ul className="mt-10 pb-3 pl-5 font-bold">
              <li className="pb-2">Explore Bounties</li>
              <li className="pb-2"> New Bounty</li>
              <li className="pb-2">My Bounties</li>
              <li className="pb-2">Review</li>
              <li className="pb-2">Settings</li>
            </ul>
          </div>
        </div>
        <div className="border-mygrey border-2 rounded-2xl mt-10 pt-10 pb-20 w-9/12">
          <div className="content pb-3 border-b border-mygrey">
            <h1 className="text-base text-black font-bold pl-5">Badges</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSideBar;
