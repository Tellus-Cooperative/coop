import React from 'react';
import Cards from '../common/Cards';
import LeftSideBar from './leftSideBar';

const ExploreBounties = () => {
    return ( <>
  <section id="bountyexplore" className="mt-10 mx-auto">
    <div className="flex">
        <div className="w-3/12 mx-3">
            <LeftSideBar />
        </div>
        <div className="w-8/12 mx-6">
            <div className="content">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">
                        Explore Bounties
                    </h1>
                </div>
                <div className="cards mt-7">
                    <Cards />

                    <Cards />

                    <Cards />
                </div>
            </div>
        </div>
    </div>
  </section>
    </> );
}
 
export default ExploreBounties;