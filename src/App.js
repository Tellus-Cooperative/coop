import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BountyListing from "./bountylisting";
import Home from "./home";
import NewListing from "./bountysubmission"
import MyBounties from "./proposals";
import BountyOpen from "./bounty";
import Propsal from "./proposal";
import AllBounties from './explore';
import {Helmet} from "react-helmet";

 const App = () => {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/listing" element={<BountyListing />} />
      <Route path="/allbounties" element={<AllBounties />} />
      <Route path="/newsubmission" element={<NewListing />} />
      <Route path="/proposals/" element={<MyBounties />} />
      <Route path="/bounty" element={<BountyOpen />} />
      <Route path="/newproposal" element={<Propsal />} />
    </Routes>
  </Router>
);

}

export default App;