import React, {useState, useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {submitProposal} from "./query";
import { useMutation, useQuery } from "@apollo/client";
import { useSorobanReact } from "@soroban-react/core";

const Proposal = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [discussion, setDiscussion] = useState('')
  const [searchParams] = useSearchParams();
  const [publicKey, setPublicKey] = useState("");

  const sorobanContext = useSorobanReact();
  const {address}= sorobanContext || {}

  const id = searchParams.get('id');

  const [addProposal, {data,loading,error}] = useMutation(submitProposal)

if(data){
  alert('New Proposal Submitted')
}

  useEffect(() => {
    if(address){
      getKey(address)
      console.log(address, "I am address")
    }},[address])

  const handleProposal = (e) => {
    e.preventDefault();
    addProposal({
      variables : {
        title: title,
        public_id:publicKey,
        cooperative: id,
        description:description,
        discussion:discussion

      }
    })
  }

  const getKey = async (address) => {
    setPublicKey(address);
};

  return (
    <section id="bountylisting" className="pb-24 mt-10">
      <div className="">
        <div className="content">
          <form onSubmit={handleProposal}>
            <div className="mt-5 flex">
              <div className="w-7/12">
                <div onClick={() => navigate(-1)} className="back mb-3">
                  <h3 className="hover:cursor-pointer text-mygrey font flex items-center">
                    <span>
                      <img src="/back.png" alt="" />
                    </span>
                    Back
                  </h3>
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

                  <div>
                    <p className="font-bold">Title</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => setTitle(e.target.value)}
                      className="rounded-lg w-full pl-5 pt-5 h-10 border border-black mt-2"
                    />

                    <p className="font-bold mt-7">Description</p>
                    <textarea
                      cols="10"
                      rows="5"
                      className="border pl-5 pt-5 border-black w-full rounded-lg"
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <p className="font-bold mt-7">Description</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="rounded-lg w-full pl-5 pt-5 h-10 border border-black mt-2"
                      onChange={(e) => setDiscussion(e.target.value)}
                    />

                  </div>

                </div>
              </div>

              <div className="w-5/12">
                <section className="w-10/12 mx-auto">
                  <div className="border-mygrey border-2 mt-10 rounded-xl px-4 w-9/12 py-3 ml-auto">
                    <button type="submit" className="border-black border w-full rounded-full px-10 py-4 flex justify-center mx-auto my-4 flex text-center">
                      <p className="font-bold text-center">Preview</p>
                    </button>

                    <button className="border-black border w-full rounded-full px-10 py-4 flex justify-center mx-auto my-4">
                      <p className="font-bold">Connect Wallet</p>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
