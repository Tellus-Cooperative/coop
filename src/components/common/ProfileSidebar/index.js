import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="bounties">
        <div className="border-mygrey border-2 rounded-2xl py-3 w-full">
          <div
            onClick={() => navigate(-1)}
            className="hover:cursor-pointer back mb-3"
          >
            <h3 className="text-mygrey font flex items-center">
              <span>
                <img src="/back.png" alt="" />
              </span>
              Back
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="content flex-col items-center justify-center">
              <img className="mx-auto flex" src="/profile.png" alt="" />
              <h1 className="text-xl text-black mt-3 font-bold text-center">
                My Cooperative
              </h1>
              <p className="text-center">2k Memebers</p>
              <button className="border border-2 mt-3 rounded-3xl bg-transparent w-52 border-mygrey py-3 text-mygrey font-semibold">
                Join
              </button>
            </div>
          </div>
          <div className="menu pb-10 mt-16">
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
