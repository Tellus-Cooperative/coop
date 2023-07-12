import React, { useState, useEffect } from "react";
import Cards from "../common/Cards/proposalcards";
import LeftSideBar from "../common/ProfileSidebar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";
import { allProposals, searchProposals } from "./query";

const MyBounties = () => {
  const [proposalData, setProposalData] = useState([])
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { loading, data, erorr } = useQuery(allProposals, {
    variables: {
      cooperative: id
    }
  })

  const [searchButtonExc, { data: searchData, loading: searchLoading, error: searchError }] = useLazyQuery(searchProposals, {
    fetchPolicy: 'no-cache'
  })

  const handleNavigator = (item) => {
    navigate("/bounty/", {
      state: { item }
    });
  };

  useEffect(() => {
    if (data) {
      setProposalData(data)
    }

    if (searchData) {

      setProposalData(searchData)
    }
  }, [data, searchData])

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
      <section id="bountyexplore" className="mt-10 mx-auto">
        <div className="flex">
          <div className="w-3/12 mx-3">
            <LeftSideBar cooperativeId={id} />
          </div>
          <div className="w-9/12 mx-6">
            <div className="content">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Proposals</h1>
                <div className="searchIcon flex items-center border border-2 border-mygrey rounded-[2rem] w-[33%] ml-6 py-3">
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
              {proposalData?.Proposals?.map((item, index) => (
                <div className="cards mt-7">
                  <Cards item={item} handleClick={() => handleNavigator(item)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBounties;
