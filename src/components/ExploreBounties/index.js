import React from 'react';
import Cards from '../common/Cards';
import LeftSideBar from './leftSideBar';

const ExploreBounties = () => {
    return ( <>
  <section id="bountyexplore" className="mt-10 w-9/12 mx-auto">
    <div className="flex">
        <div className="w-4/12">
            <LeftSideBar />
        </div>
        <div className="w-9/12">
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