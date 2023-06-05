import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BountyListing from "./bountylisting";
import Home from "./home";
import NewListing from "./bountysubmission"
import MyBounties from "./mybounties";
import BountyOpen from "./bounty";
import Propsal from "./proposal";
import AllBounties from './explore';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/listing" element={<BountyListing />} />
      <Route path="/allbounties" element={<AllBounties />} />
      <Route path="/newsubmission" element={<NewListing />} />
      <Route path="/mybounties" element={<MyBounties />} />
      <Route path="/bounty" element={<BountyOpen />} />
      <Route path="/newproposal" element={<Propsal />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
