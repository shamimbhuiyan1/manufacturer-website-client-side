import React from "react";
import { Link } from "react-router-dom";
import factory from "../../../assets/automating-manufacturing-processes.webp";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen  mb-56 ">
        <img
          style={{ height: "1000px", width: "3000px" }}
          src={factory}
          alt="car"
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white ">
            <h1 className="mb-5 text-5xl font-bold">
              NEW TECHNOLOGY & <h1> BUILD</h1>
            </h1>

            <button className="btn btn-primary text-black mt-5">
              <Link to="/products">BUY NOW</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
