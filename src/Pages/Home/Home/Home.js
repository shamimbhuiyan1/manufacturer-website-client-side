import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Contact></Contact>
    </div>
  );
};

export default Home;
