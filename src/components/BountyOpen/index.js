import React from "react";
import { useLocation } from "react-router-dom";

const Bounty = () => {
  const { state } = useLocation();
  const { item } = state;
  return (
    <section id="bountylisting" className="pb-24 mt-10">
      <div>
        <div className="content">
          <h1 className="text-black text-3xl font-bold">{item.title}</h1>

          <div className="mt-5 flex justify-between">
            <div className="w-7/12">
              <div className="flex items-center justify-between">
                <div className="button ml-3">
                  <button className="bg-green px-6 py-1  text-white font-semibold rounded-full">
                    {item.status ? "Active" : "Inactive"}
                  </button>
                </div>

                <div className="tags">
                  <div className="flex justify-between">
                    <div className="tag1">
                      <div className="flex items-center">
                        <img src="/tree.png" alt="" />
                        <p className="pl-1 text-sm">My Cooperative by</p>
                      </div>
                    </div>

                    <div className="tag2 ml-4">
                      <div className="flex items-center">
                        <img src="/tree.png" alt="" />
                        <p className="pl-1 text-sm">{item?.public_id?.substring(0, 17)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sharebutton flex items-center">
                  <img src="share.png" alt="" className="mr-1" />
                  <h3 className="text-sm">Share</h3>
                </div>
              </div>

              <div className="content">
                <p className="text-black mt-8 leading-normal tracking-wider">
                  {item.description}
                </p>
              </div>

              <div className="form">
                <div className="border-mygrey border-2 rounded-2xl mt-10 pt-10 pb-20 w-12/12">
                  <div className="content pb-3 border-b border-mygrey">
                    <h1 className="text-base text-black font-bold pl-5">
                      Cast your vote.
                    </h1>
                  </div>

                  <div className="form-content px-5 pt-5">
                    <button className="border-black border w-full rounded-full px-10 py-5 flex justify-center mx-auto my-2 flex text-center">
                      <p className="font-bold text-center">Approve</p>
                    </button>
                    <button className="border-black border w-full rounded-full px-10 py-5 flex justify-center mx-auto my-2 flex text-center">
                      <p className="font-bold text-center">Reject</p>
                    </button>
                    <button className="border-black border w-full rounded-full px-10 py-5 flex justify-center mx-auto my-2 flex text-center">
                      <p className="font-bold text-center">Abstain</p>
                    </button>
                    <button className="border-black bg-blueColor border w-full rounded-full px-10 py-5 flex justify-center mx-auto my-2 flex text-white text-center">
                      <p className="font-bold text-center">Vote</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-3 w-5/12">
              <section className="w-10/12 mx-auto">
                <div className="border-mygrey border-2 rounded-xl py-10 ml-auto w-9/12">
                  <div className="content pb-3 border-b border-mygrey">
                    <h1 className="text-base text-black font-bold pl-5">
                      Information
                    </h1>
                  </div>

                  <div className="data mt-3 px-5">
                    <div className="flex justify-between my-2">
                      <div className="title">
                        <h3 className="font-bold text-black text-base">
                          Published By:
                        </h3>
                      </div>
                      <p className="information">Simple Voting</p>
                    </div>

                    <div className="flex justify-between my-2">
                      <div className="title">
                        <h3 className="font-bold text-black text-base">
                          Start Date:
                        </h3>
                      </div>
                      <p className="information">January 1, 2024, 5:00 AM</p>
                    </div>

                    <div className="flex justify-between my-2">
                      <div className="title">
                        <h3 className="font-bold text-black text-base">
                          End Date:
                        </h3>
                      </div>
                      <p className="information">January 1, 2024, 5:00 AM</p>
                    </div>

                    <div className="flex justify-between my-2">
                      <div className="title">
                        <h3 className="font-bold text-black text-base">
                          Block:
                        </h3>
                      </div>
                      <p className="information">#254121386</p>
                    </div>
                  </div>
                </div>

                <div className="border-mygrey border-2 rounded-2xl mt-10 pt-10 pb-20 ml-auto w-9/12">
                  <div className="content pb-3 border-b border-mygrey">
                    <h1 className="text-base text-black font-bold pl-5">
                      Current Results
                    </h1>
                  </div>

                  <div className="data mt-3 px-5">
                    <h2 className="text-black font-semibold mb-4">
                      Approve
                    </h2>
                    <h2 className="text-black font-semibold mb-4">
                      Reject
                    </h2>
                    <h2 className="text-black font-semibold mb-4">
                      Abstain
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bounty;
