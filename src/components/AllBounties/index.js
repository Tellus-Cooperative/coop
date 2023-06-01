import React from "react";
import {useNavigate} from 'react-router-dom';


const AllBounties = () => {
    const navigate = useNavigate();
    
  return (
    <>
      <section id="allbounties">
        <div className="content">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mt-8">Explore Cooperatives</h1>
          </div>

          <div className="list grid grid-cols-3 gap-4 mt-12">
            <div onClick = {() => navigate('/mybounties')} className="border-mygrey border-2 rounded-xl py-10 w-9/12">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBounties;
