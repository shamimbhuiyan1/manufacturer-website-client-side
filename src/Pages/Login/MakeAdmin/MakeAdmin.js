import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const MakeAdmin = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://hexa-tools.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const makeAdmin = (email) => {
    fetch(`https://hexa-tools.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You don't have the authorization");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          toast.success("User made as admin");
          refetch();
        }
      });
  };

  return (
    <div>
      <PageTitle title="Make Admin"></PageTitle>
      <h2 className="mb-2 text-xl">All Users</h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="product-img" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-outline rounded-full btn-sm"
                    >
                      Make admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
