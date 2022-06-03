import React from "react";
import Reviews from "../../../Pages/Reviews/Reviews";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Integration from "../Integration/Integration";

import Contact from "./Contact/Contact";
import HomeProducts from "../HomeProducts/HomeProducts";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Integration></Integration>
      <HomeProducts></HomeProducts>
      <Reviews></Reviews>
      <Contact></Contact>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
