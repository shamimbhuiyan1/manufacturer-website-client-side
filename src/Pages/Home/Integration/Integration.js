import React from "react";

import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/inventory-maintenance-icon.png";
import img3 from "../../../assets/img3.png";

const Integration = () => {
  return (
    <div>
      <h1 className="text-center text-primary text-3xl font-bold">
        What Does The Digital Tools Integration
      </h1>
      ;
      <div className="ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Multichannel Sales</h2>
            <p>
              Bid farewell to standalone tools, as tools Inventory centralizes
              all orders across sources and then classifies them under
              appropriate filters, based on their current status, making it your
              complete. You can also keep track of product serial numbers
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Master Of Stock</h2>
            <p>
              When you sell items over more than one channel, Car Inventory not
              only keeps track of your inventory levels at all times, and
              prompts you to reorder low stock, it also instantly updates your
              current stock levels on Warehouse.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Client Database</h2>
            <p>
              Whenever a new order from Warehouse gets captured by Inventory,
              the client data is also imported and added to the built-in client
              database. Any future orders made by the same customer can be
              tracked under a dedicated sales section for each client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
