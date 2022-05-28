import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import useToolsDetail from "../../../hooks/useToolsDetail";
import deleteIcon from "../../../images/delete-icon.png";

const ManageProduct = ({ product, index, handleDelete }) => {
  const { name, _id, price, quantity, img } = product;
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [detail, setDetail] = useToolsDetail(inventoryId);
  const stokeRef = useRef();
  const toolsInfo = {
    name: detail.name,
    description: detail.description,
    price: detail.price,
    img: detail.img,
    sold: parseInt(detail.sold) + 1,
    ratings: detail.ratings,
    quantity: quantity,
  };

  const url = `https://tranquil-mountain-12597.herokuapp.com/tool/${inventoryId}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toolsInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log('Success:', data);
      setDetail(toolsInfo);
    })
    .catch((error) => {
      // console.error('Error:', error);
    });
  toast.success(`One Item Delivered `, { id: "delivered" });
  navigate("/tools/" + inventoryId);

  return (
    <div className="container">
      <div className="row border border-2 rounded my-3 pb-2">
        <div className="col-md-1  d-flex text-center  justify-content-center pb-1  align-items-center">
          <span className="pe-5 fw-bold pt-3 text-center">{index + 1}.</span>
        </div>
        <div className="col-md-2 d-flex flex-column manage-items justify-content-center pb-1  ">
          <h5>
            {" "}
            <img className=" item-img " src={img} alt="" />
          </h5>{" "}
          <br />
          <h5>{name}</h5>
        </div>
        <div className="col-md-7 px-5 py-2 ">
          <div className="row d-flex justify-content-center pb-1  align-items-center">
            <div className="col-md-6">
              <button className="btn ">Quantity : {quantity} </button> <br />
            </div>
          </div>
          <div className="col-md-6">
            <button className="btn ">Quantity : {price} </button> <br />
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
          <div>
            <div
              onClick={() => handleDelete(product._id)}
              className="text-center"
              style={{ cursor: "pointer" }}
            >
              <img
                className="bg-danger w-50 p-2 rounded-circle"
                src={deleteIcon}
                alt=""
              />
            </div>
            <Link to={"/tools/" + _id}>
              <button className="btn btn-outline-success text-capitalize mt-3 fw-bold">
                {" "}
                Update{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
