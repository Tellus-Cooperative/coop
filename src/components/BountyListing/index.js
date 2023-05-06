import React from "react";

const Listing = () => {
  return (
    <section id="bountylisting" className="pb-24 mt-10">
      <div>
        <div className="content">
          <h1 className="text-black text-3xl font-bold">Bounty Listing</h1>

          <div className="mt-5 flex">
            <div className="w-7/12">
              <div className="flex items-center justify-between">
                <div className="button ml-3">
                  <button className="bg-green px-6 py-1  text-white font-semibold rounded-full">
                    Active
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
                        <p className="pl-1 text-sm">GAD...RARW</p>
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
                  As a bounty hunter for the Soroban Contract Writing in Rust,
                  you will be responsible for thoroughly testing our platform
                  and identifying any potential security vulnerabilities or
                  bugs. You will be tasked with conducting comprehensive
                  penetration testing and code review to ensure that our
                  platform is secure, reliable, and efficient
                </p>

                <p className="text-black mt-8 leading-normal tracking-wider">
                  Successful candidates will have a strong understanding of Rust
                  development, as well as experience working with blockchain
                  technology and smart contract writing. You should be
                  comfortable working with cryptographic algorithms, as well as
                  developing and testing secure, reliable, and efficient.
                </p>
              </div>

              <div className="form">
                <div className="border-mygrey border-2 rounded-2xl mt-10 pt-10 pb-20 w-11/12">
                  <div className="content pb-3 border-b border-mygrey">
                    <h1 className="text-base text-black font-bold pl-5">
                      Apply to Bounty
                    </h1>
                  </div>

                  <div className="form-content px-5 pt-5">
                    <form>
                      <p>Title</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="rounded-lg w-full h-10 border border-black mt-2"
                      />

                      <div className="mt-5">
                        <p>Description</p>
                        <textarea
                          cols="10"
                          rows="5"
                          className="border border-black w-full rounded-lg"
                        />
                      </div>

                      <button className="border-black border rounded-full px-10 py-3 flex mx-auto mt-10">
                        <p className="font-bold">Apply</p>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-5/12">
              <section className="w-10/12 mx-auto">
                <div className="border-mygrey border-2 rounded-xl py-10 w-9/12">
                  <div className="flex flex-col items-center">
                    <div className="content">
                      <img src="/profile.png" alt="" />
                      <h1 className="text-xl text-black font-bold">
                        My Cooperative
                      </h1>
                      <p>300 Active Bounties</p>
                      <p>678 Bounties Paid</p>
                    </div>
                  </div>
                </div>
                <div className="border-mygrey border-2 rounded-2xl mt-10 pt-10 pb-20 w-9/12">
                  <div className="content pb-3 border-b border-mygrey">
                    <h1 className="text-base text-black font-bold pl-5">
                      Information
                    </h1>
                  </div>


                  <div className="data mt-3 px-5">
                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Published By:</h3>
                        </div>
                        <p className="information">
                            GAD...RARW
                        </p>
                      </div>

                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Payment:</h3>
                        </div>
                        <p className="information">
                            GAD...RARW
                        </p>
                      </div>

                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Status:</h3>
                        </div>
                        <p className="information">
                            1,000 XLM
                        </p>
                      </div>

                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Start Date:</h3>
                        </div>
                        <p className="information">
                           Active
                        </p>
                      </div>

                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">End Date:</h3>
                        </div>
                        <p className="information">
                            Jan 1, 2024
                        </p>
                      </div>

                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Block:</h3>
                        </div>
                        <p className="information">
                            #254121386
                        </p>
                      </div>


                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Level:</h3>
                        </div>
                        <p className="information">
                            Beginner
                        </p>
                      </div>



                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Topic:</h3>
                        </div>
                        <p className="information">
                             Vanilla Stellar
                        </p>
                      </div>


                      <div className="flex justify-between my-2">
                        <div className="title">
                            <h3 className="font-bold text-black text-base">Type:</h3>
                        </div>
                        <p className="information">
                            Cooperative
                        </p>
                      </div>


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

export default Listing;
