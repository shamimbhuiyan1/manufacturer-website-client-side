import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useUserInfo from "../../hooks/useUserInfo";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [userInfo, isLoading, refetch] = useUserInfo(user);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  refetch();
  const navberItems = (
    <>
      <li>
        <Link to="/" className="hover:text-secondary active:text-secondary">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="hover:text-secondary active:text-secondary"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className="hover:text-secondary active:text-secondary"
        >
          My Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className="hover:text-secondary active:text-secondary"
        >
          Blogs
        </Link>
      </li>
      {user && (
        <li tabIndex="0">
          <span className="rounded-md py-2 m-1 active:text-secondary  bg-transparent text-white hover:text-secondary gap-1">
            Dashboard
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </span>
          <ul className="p-2 bg-base-100 shadow-lg rounded-lg left-0 top-full  w-auto text-md">
            {!admin && (
              <>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/my-orders"
                  >
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/add-review"
                  >
                    Add Review
                  </NavLink>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/add-product"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/manage-all-products"
                  >
                    Manage Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/manage-all-orders"
                  >
                    Manage Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="m-1 active:text-secondary py-1 bg-transparent text-black hover:text-secondary"
                    to="/dashboard/make-admin"
                  >
                    Make An Admin
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 bg-black">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navberItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {" "}
            <span className="text-[#f77728]">TOOLS</span>{" "}
            <span className="text-gold-300">MANUFACTURER</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 text-white">{navberItems}</ul>
        </div>
      </div>
      <div className="sm:navbar-end ">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
