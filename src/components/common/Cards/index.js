import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-full mt-5 pl-6 pr-3 py-10 rounded-2xl border-2 border-mygrey w-full">
        <div className="flex justify-between">
          <div className="w-4/12">
            <div className="tags">
              <div className="flex justify-between">
                <div className="tag1">
                  <div className="flex items-center">
                    <img src="/tree.png" alt="" />
                    <p className="pl-1 text-sm">My Cooperative by</p>
                  </div>
                </div>

                <div className="tag1">
                  <div className="flex items-center">
                    <img src="/tree.png" alt="" />
                    <p className="pl-1 text-sm">GAD...RARW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-8/12">
            <div className="flex justify-end">
              <div className="button">
                <button className="bg-green px-6 py-1 text-white font-semibold rounded-full">
                  1,000 XLM
                </button>
              </div>
              <div className="button ml-3">
                <button className="bg-green px-6 py-1  text-white font-semibold rounded-full">
                 Active
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <h1 className="text-black text-3xl mt-5 font-bold">Bounty Listing</h1>

          <p className="mt-5 pr-3">
            As a bounty hunter for the Soroban Contract Writing in Rust, you
            will be responsible for thoroughly testing our platform and
            identifying any potential security vulnerabilities or bugs. You will
            be tasked with conducting comprehensive penetration testing and code
            review to ensure that...
          </p>

          <div className="flex  mt-3">
            <div className="w-4/12 time">
              <p className="tracking-wider leading-normal">5 hours ago</p>
            </div>
            <div className="flex w-8/12 justify-end flex-wrap lg:space-x-3">
              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">Smart Contracts</p>
              </button>

              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">Smart Contracts</p>
              </button>

              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">Smart Contracts</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
