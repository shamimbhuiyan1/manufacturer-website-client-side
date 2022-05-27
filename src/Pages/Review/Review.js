import React from "react";
import person1 from "../../assets/person-1.png";
import person2 from "../../assets/person-2.png";
import person3 from "../../assets/person-3.png";

const Review = () => {
  return (
    <div>
      <h1 className="text-center my-6 text-3xl text-primary font-bold">
        Ours Client Reviews
      </h1>
      ;
      <div className="my-6 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={person1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Paul Jacks</h2>
            <p>
              This is one of the best car tools manufacturer company.Their
              Products are premium.I suggest all others client who needs good
              car parts you can blind foldly choose them.{" "}
            </p>
          </div>

          <div className="flex justify-center items-center mb-4">
            <h1 className=" font-bold">Ratings : (5.0) </h1>
            <span></span>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
        {/* 2 */}

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={person2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Jonthan Rostam</h2>
            <p>
              I think this car tools manufacturer company is client
              friendly.They communicate with client and assist them which
              product suitable for their cars.i personaly pefer them.{" "}
            </p>
          </div>

          <div className="flex justify-center items-center mb-4">
            <h1 className=" font-bold">Ratings : (5.0) </h1>
            <span></span>
            <div class="rating rating-lg rating-half">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={person3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Willium Ball</h2>
            <p>
              So many products from so many manufacturers - I really like the
              site for the choices it offers, not to mention the great pricing.
              Compared with a few other sites and the prices are definitely
              lower.{" "}
            </p>
          </div>

          <div className="flex justify-center items-center mb-4">
            <h1 className=" font-bold">Ratings : (4.9) </h1>
            <span></span>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
