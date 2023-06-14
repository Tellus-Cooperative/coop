import React from "react";
import { useNavigate } from "react-router-dom";

const AllBounties = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="allbounties">
        <div className="content">
          <div className="flex justify-between items-center">
          <div className="flex items-center mt-5 w-[70%]">
            <h1 className="text-3xl font-bold">Explore Cooperatives</h1>
            <div className="searchIcon flex items-center border border-2 border-mygrey rounded-[2rem] w-[40%] ml-6 py-3">
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
            <div className="totalmembers">
              <h1 className="text-gray">
                1k Cooperative (s)
              </h1>
            </div>
            </div>

          <div className="list grid grid-cols-3 gap-4 mt-12">
            <div
              onClick={() => navigate("/mybounties")}
              className="border-mygrey border-2 rounded-xl py-10 w-9/12"
            >
              <div className="flex flex-col items-center">
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
            </div>

            <div className="border-mygrey border-2 rounded-xl py-10 w-9/12">
              <div className="flex flex-col items-center">
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
            </div>

            <div className="border-mygrey border-2 rounded-xl py-10 w-9/12">
              <div className="flex flex-col items-center">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBounties;
