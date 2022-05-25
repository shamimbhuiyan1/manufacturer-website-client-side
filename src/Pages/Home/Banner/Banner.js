import React from "react";
import car from "../../../assets/banner red car.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen mb-12 ">
        <img style={{ height: "600px", width: "1500px" }} src={car} alt="car" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white ">
            <h1 className="mb-5 text-5xl font-bold">
              NEW TECHNOLOGY & <h1> BUILD</h1>
            </h1>

            <button className="btn btn-primary text-black">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
