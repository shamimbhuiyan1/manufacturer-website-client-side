import React from "react";

const BusinessSummart = () => {
  return (
    <div className="m-10">
      <h1 className="text-center text-3xl text-primary font-bold">
        Our Business Summary
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">We Served Following Customers</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - May-27 1st</div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Annual Revenue</div>
            <div class="stat-value">$25M</div>
            <div class="stat-desc">↗︎ $5M (22%)</div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Reviews</div>
            <div class="stat-value">50K</div>
            <div class="stat-desc">↘︎ 20 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummart;
