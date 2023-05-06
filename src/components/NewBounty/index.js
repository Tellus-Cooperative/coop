import React from "react";

const NewBounty = () => {
  return (
    <section id="bountylisting" className="pb-24 mt-10">
      <div className="">
        <div className="content">
          <div className="mt-5 flex">
            <div className="w-7/12">
              <div className="back mb-3">
                <h3 className="text-mygrey font flex items-center"> 
                <span><img src="/back.png" alt="" /></span>
                Back</h3>
              </div>
              <div className="data border border-black rounded-xl px-10 py-10">
                <div className="flex">
                  <div className="pr-5">
                    <img src="/Info.png" alt="Info" className="Info Icon" />
                  </div>
                  <div>
                    <p>
                      You need to connect your wallet in order to submit a
                      proposal.
                    </p>
                    <a href="#" className="font-bold">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="form mt-10">
                <form>
                  <div>
                    <p className="font-bold">Title</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="rounded-lg w-full h-10 border border-black mt-2"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="font-bold">Payment Amount</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="rounded-lg w-full h-10 border border-black mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-3">
                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-bold text-black">
                          *Bounty Type
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-black rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        >
                          <option value=""></option>
                          <option value="Cooperative">Cooperative</option>
                          <option value="Competitive">Competitive</option>
                          <option value="Hackathon">Hackathon</option>
                        </select>
                      </label>
                    </div>

                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-bold text-black">
                          *Bounty Difficulty
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-black rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        >
                          <option value=""></option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </label>
                    </div>

                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-bold text-black">
                          *Bounty Topic
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-black rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        >
                          <option value=""></option>
                          <option value="Smart Contracts">
                            Smart Contracts
                          </option>
                          <option value="Vanilla Stellar">
                            Vanilla Stellar
                          </option>
                          <option value="Design">Design</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <p className="text-black font-bold">
                    Description
                    <textarea
                      cols="10"
                      rows="5"
                      className="border border-black w-full rounded-lg"
                    />
                    <p className="font-bold mt-3">Github Link</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="rounded-lg w-full h-10 border border-black mt-2"
                    />
                  </p>
                </form>
              </div>
            </div>

            <div className="w-5/12">
              <section className="w-10/12 mx-auto">
                <div className="border-mygrey border-2 rounded-xl px-4 w-9/12 py-3">
                  <button className="border-black border w-full rounded-full px-10 py-4 flex justify-center mx-auto my-4 flex text-center">
                    <p className="font-bold text-center">Preview</p>
                  </button>

                  <button className="border-black border w-full rounded-full px-10 py-4 flex justify-center mx-auto my-4">
                    <p className="font-bold">Connect Wallet</p>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBounty;
