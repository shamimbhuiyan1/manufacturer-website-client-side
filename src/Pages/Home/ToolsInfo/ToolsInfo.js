import React from "react";

const ToolsInfo = ({ tool }) => {
  const { img, name, description, minOrderQuantity, availableQuantity, price } =
    tool;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            style={{ width: "500px", height: "200px" }}
            src={img}
            alt="tools"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">Available Quantity :</span>{" "}
            {availableQuantity}
          </p>
          <p>
            <span className="font-bold">Minimum Quantity :</span>{" "}
            {minOrderQuantity}
          </p>
          <p>
            <span className="font-bold">Price :</span> {price}
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsInfo;
