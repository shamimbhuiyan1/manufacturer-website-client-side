import React from "react";
import notfound from "../../assets/not-found.webp";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-center font-bold my-6 text-4xl text-red-500 ">
        Opp'S !!! Page Not Found.
      </h1>
      <img src={notfound} alt="not found page" className="mx-auto" />
    </div>
  );
};

export default NotFound;
