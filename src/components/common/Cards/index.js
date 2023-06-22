import React from "react";

const Cards = ({handleClick, item}) => {


  return (
    <>
      <div onClick={() => handleClick()} className="w-full mt-5 pl-6 pr-3 pt-10 pb-4 rounded-2xl border-2 border-mygrey w-full">
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
                    <p className="pl-1 text-sm">{item?.public_address?.substring(0,10)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-8/12">
            <div className="flex justify-end">
              <div className="button">
                <button className="bg-green px-6 py-1 text-white font-semibold rounded-full">
                  {item.payment_amount} XLM
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
          <h1 className="text-black text-3xl mt-5 font-bold">{item.bounty_name}</h1>

          <p className="mt-5 pr-3">
          {item.bounty_description}
          </p>

          <div className="flex mt-3">
            <div className="w-4/12 time flex items-center">
              <p className="tracking-wider leading-normal">5 hours ago</p>
            </div>
            <div className="flex w-8/12 justify-end flex-wrap lg:space-x-3">
              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">{item.bounty_difficulty}</p>
              </button>

              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">{item.bounty_topic}</p>
              </button>

              <button className="bg-mygrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm text-white">{item.bounty_type}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
