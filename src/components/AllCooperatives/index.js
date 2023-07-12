import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useLazyQuery, refetch } from "@apollo/client";
import { AllCooperatives, IncreaseTeamMember, searchMemeber } from './query';


const AllBounties = () => {
  const [searchText, setSearchText] = useState('');
  const [cooperativeData, setCooperativeData] = useState([]);

  const navigate = useNavigate();
  const { loading, data, error } = useQuery(AllCooperatives);

  const [updateBountyNow, { data: bountyUpdateData, error: bountyDataError }] =
    useMutation(IncreaseTeamMember);

  const [searchButtonExc, { data: searchData, loading: searchLoading, error: searchError }] = useLazyQuery(searchMemeber, {
    fetchPolicy: 'no-cache'
  })


  useEffect(() => {
    if (data) {
      setCooperativeData(data)
    }

    if (searchData) {

      setCooperativeData(searchData)
    }
  }, [data, searchData])

  const handleJoinButton = () => {
    updateBountyNow({
      variables: {
        id: "a008f90d-e062-40cd-b3b9-1594d1b1a450",
        total_Members: 3
      }
    })
  }

  const searchItem = (e) => {
    setSearchText(e.target.value)

  }

  const searchActionHandler = (e) => {
    if (e.key === "Enter") {
      console.log('I am ')
      searchButtonExc({
        variables: {
          title: searchText
        }
      })
    }
  }

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
                  onChange={(e) => searchItem(e)}
                  onKeyDown={(e) => searchActionHandler(e)}
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
                {cooperativeData?.Cooperatives?.length} Cooperative (s)
              </h1>
            </div>
          </div>



          <div className="list grid grid-cols-3 gap-4 mt-12">
            {cooperativeData?.Cooperatives?.map((item, index) => (
              <div
                onClick={() => navigate("/proposals/?id=" + item.id)}
                className="hover:cursor-pointer border-mygrey border-2 rounded-xl py-10 w-9/12"
              >
                <div className="flex flex-col items-center">
                  <div className="content flex-col items-center justify-center">
                    <img className="mx-auto flex" src="/profile.png" alt="" />
                    <h1 className="text-xl text-black mt-3 font-bold text-center">
                      {item.title}
                    </h1>
                    <p className="text-center">{item.total_Members} Memebers</p>
                    <button onClick={() => handleJoinButton()} className="border border-2 mt-3 rounded-3xl bg-transparent w-52 border-mygrey py-3 text-mygrey font-semibold">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
};

export default AllBounties;
