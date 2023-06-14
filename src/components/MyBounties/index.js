import React from "react";
import Cards from "../common/Cards/proposalcards";
import LeftSideBar from "../common/ProfileSidebar";
import { useNavigate } from "react-router-dom";

const MyBounties = () => {
  const navigate = useNavigate();

  const handleNavigator = () => {
    navigate("/bounty");
  };
  return (
    <>
      <section id="bountyexplore" className="mt-10 mx-auto">
        <div className="flex">
          <div className="w-3/12 mx-3">
            <LeftSideBar />
          </div>
          <div className="w-9/12 mx-6">
            <div className="content">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Proposals</h1>
                <div className="searchIcon flex items-center border border-2 border-mygrey rounded-[2rem] w-[33%] ml-6 py-3">
                  <img src="/search.png" alt="" className="pl-3" />
                  <input
                    type="search"
                    className="border-r  border-gray-400 w-[75%] placeholder:pl-4 placeholder:text-mygrey placeholder:font-regular"
                    placeholder="Search"
                  />
                  <select className="text-sm text-mygrey ">
                    <option>All</option>
                  </select>
                </div>
              </div>
              <div className="cards mt-7">
                <Cards handleClick={handleNavigator} />
              </div>
              <div className="cards mt-7">
                <Cards handleClick={handleNavigator} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBounties;
