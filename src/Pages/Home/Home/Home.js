import React from "react";
import Review from "../../Review/Review";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Integration from "../Integration/Integration";
import Tools from "../Tools/Tools";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Integration></Integration>
      <Tools></Tools>
      <Review></Review>
      <Contact></Contact>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
